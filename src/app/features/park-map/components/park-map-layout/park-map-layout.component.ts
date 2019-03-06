import { Component, OnInit } from '@angular/core';
import { NpsParkDataService } from '../../services/nps-park-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-park-map-layout',
  templateUrl: './park-map-layout.component.html',
  styleUrls: ['./park-map-layout.component.scss']
})
export class ParkMapLayoutComponent implements OnInit {
  mapPins = [];
  parkList = [];

  constructor(private npsDataSvc: NpsParkDataService) { }

  ngOnInit() {
    this.npsDataSvc.getParks()
      .pipe(
        map((parks: any) => parks.data)
      )
      .subscribe(parks => {
        this.parkList = parks;
        this.setMapPins(parks);
      });
  }

  setMapPins(parks) {
    for (const park of parks) {
      if (park.latLong.length) {
        const parkLocation = park.latLong.split(',');
        const parkLat = parseFloat(parkLocation[0].split(':')[1]);
        const parkLong = parseFloat(parkLocation[1].split(':')[1]);

        this.mapPins.push({lat: parkLat, long: parkLong, id: park.id, name: park.name});
      }
    }
  }

}
