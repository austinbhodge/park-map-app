import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationService {

  constructor(
    private http: HttpClient
  ) {}

  getClientLocation(): Observable<any> {
    const clientLocation = JSON.parse(localStorage.getItem('clientLocation'));

    if (clientLocation) {
      return of(clientLocation);
    } else {
      return this.http.get(`https://ipapi.co/json`)
        .pipe(
          tap(clientInfo => localStorage.setItem('clientLocation', JSON.stringify(clientInfo)))
        );
    }
  }
}
