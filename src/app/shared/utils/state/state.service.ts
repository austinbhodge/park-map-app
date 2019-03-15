import { Injectable, OnDestroy } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { concat, isNull, merge, omit, reduce } from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService implements OnDestroy {
  private _scvngr = new Scavenger(this);
  private _loading = new BehaviorSubject<string>('');
  loading$: Observable<string> = this._loading.asObservable();

  constructor() {}

  get loading(): BehaviorSubject<string> {
    return this._loading;
  }

  get scvngr(): Scavenger {
    return this._scvngr;
  }

  concat(key: string, value: any[]): void {
    const newValue = concat(this.get(key), value);
    this[key].next(newValue);
  }

  concatWithObservable(key: string, obs: Observable<any[]>, loading: string = 'loading'): void {
    this.loading.next(loading);

    obs.pipe(
      this._scvngr.collectByKey(key),
      tap(value => this.concat(key, value)),
      tap(() => this.loading.next('')),
      take(1)
    ).subscribe();
  }

  get(key: string): any {
    return this[key].getValue();
  }

  observableSet(key: string, obs: Observable<any>, loading: string = 'loading'): Observable<any> {
    this.loading.next(loading);

    return obs
      .pipe(
        this._scvngr.collect(),
        tap(value => this.set(key, value)),
        tap(() => this.loading.next('')),
        take(1)
      );
  }

  set(key: string, value: any) {
    this[key].next(value);
  }

  setWithObservable(key: string, obs: Observable<any>, loading: string = 'loading'): void {
    this.loading.next(loading);

    obs
      .pipe(this._scvngr.collectByKey(key))
      .subscribe(value => {
        this.set(key, value);
        this.loading.next('');
      });
  }

  update(key: string, value: Object): void {
    const removedParams = reduce(value, (removedKeys, keyVal, objKey) => {
      if (isNull(keyVal) || keyVal.length === 0) {
        removedKeys.push(objKey);
        delete value[objKey];
      }

      return removedKeys;
    }, []);
    const withRemoved = omit(this.get(key), removedParams);
    this.set(key, withRemoved);
    const updatedState = merge(this.get(key), value);
    this.set(key, updatedState);
  }

  ngOnDestroy() {}
}
