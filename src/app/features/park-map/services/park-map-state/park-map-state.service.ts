import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NpsParkDataService } from '../nps-park-data/nps-park-data.service';
import { StateService } from 'src/app/shared/utils/state/state.service';
import { map, delay } from 'rxjs/operators';

interface IPark {
  name: string;
  id: string;
  designation: string;
  latLong: string;
  latitude: number;
  longitude: number;
}

interface IParkFilter {
  designationFilter: string;
  locationFilter: string;
  searchFilter: string;
}


@Injectable({
  providedIn: 'root'
})
export class ParkMapStateService extends StateService {
  private activePark = new BehaviorSubject<IPark>(null);
  private activeFilter = new BehaviorSubject<IParkFilter>(null);
  private clientLocation = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('clientLocation')));
  private mapCenter = new BehaviorSubject<number[]>([0, 0]);
  private mapZoom = new BehaviorSubject<number[]>([9]);
  private mapBounds = new BehaviorSubject<any>(null);
  private parkList = new BehaviorSubject<IPark[]>([]);

  $activePark: Observable<IPark> = this.activePark.asObservable();
  $activeFilter: Observable<IParkFilter> = this.activeFilter.asObservable();

  $clientLocation: Observable<any> = this.clientLocation.asObservable();
  $mapCenter: Observable<number[]> = this.mapCenter.asObservable();
  $mapZoom: Observable<number[]> = this.mapZoom.asObservable();
  $mapBounds: Observable<any> = this.mapBounds.asObservable();

  $parkList: Observable<IPark[]> = this.parkList.asObservable()
    .pipe(map(parks => {
      const parkMap = [];
      for (const park of parks) {
        if (park.latLong.length) {
          const parkLocation = park.latLong.split(',');
          park.latitude = parseFloat(parkLocation[0].split(':')[1]);
          park.longitude = parseFloat(parkLocation[1].split(':')[1]);
          parkMap.push(park);
        }
      }

      return parkMap;
    }));

  $parkPins: Observable<any> = this.$parkList
    .pipe(map(parks => {
      const mapPins = [];
      for (const park of parks) {
        if (park.latLong.length) {
          mapPins.push({lat: park.latitude, long: park.longitude, id: park.id, name: park.name});
        }
      }
      console.log(mapPins);
      return mapPins;
    }));

  $renderedParkList = of([]);

  constructor(private npsDataSvc: NpsParkDataService) {
    super();

    this.$mapBounds.subscribe(bounds => {
      this.$renderedParkList =  this.parkList
      .pipe(map(parks => {
        const parkMap = [];
        for (const park of parks) {
          if (bounds) {
            if (this.checkIfInBounds(park, bounds)) {
              parkMap.push(park);
            }
          }
        }

        return parkMap;
      }));
    });
  }

  // I understand this can be optimized way more by using geometry to only calculate the change in bounds, among other things.
  // I beleive it would make a good final interview question.
  checkIfInBounds(park, bounds) {
    const neLat = bounds._ne.lat;
    const neLng = bounds._ne.lng;
    const swLat = bounds._sw.lat;
    const swLng = bounds._sw.lng;

    if (park.longitude > swLng && park.latitude > swLat) {
      if (park.longitude < neLng && park.latitude < neLat) {
        return true;
      }
    }

    return false;
  }
}
