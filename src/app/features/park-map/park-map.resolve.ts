import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ParkMapStateService, NpsParkDataService, ClientLocationService } from './services';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';


@Injectable()
export class ParkMapResolve implements Resolve<boolean> {

  constructor(
    private state: ParkMapStateService,
    private npsDataSvc: NpsParkDataService,
    private clientLocationSvc: ClientLocationService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.clientLocationSvc.getClientLocation()
      .pipe(
        tap(location => {
          this.state.set('clientLocation', location);
          this.state.set('mapCenter', [location.longitude, location.latitude]);
        }),
        switchMap(location => this.npsDataSvc.getParkList(location.region_code)),
        tap(parkList => this.state.set('parkList', parkList)),
        switchMap(() => of(true))
      );
  }

}
