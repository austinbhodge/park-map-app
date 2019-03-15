import { Component, OnInit } from '@angular/core';
import { NpsParkDataService, ParkMapStateService } from '../../services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-park-map-layout',
  templateUrl: './park-map-layout.component.html',
  styleUrls: ['./park-map-layout.component.scss']
})
export class ParkMapLayoutComponent implements OnInit {

  constructor(private npsDataSvc: NpsParkDataService, public state: ParkMapStateService) { }

  ngOnInit() {
    // this.npsDataSvc.getParkList()
    //   .pipe(
    //     map((parks: any) => parks.data)
    //   )
    //   .subscribe(parks => {
    //     this.parkList = parks;
    //     this.setMapPins(parks);
    //   });

    // this.npsDataSvc.getPark('appa').subscribe(park => console.log(park));

  }

  setMapPins(parks) {
    for (const park of parks) {
      // if (park.latLong.length) {
      //   const parkLocation = park.latLong.split(',');
      //   const parkLat = parseFloat(parkLocation[0].split(':')[1]);
      //   const parkLong = parseFloat(parkLocation[1].split(':')[1]);

      //   this.mapPins.push({lat: parkLat, long: parkLong, id: park.id, name: park.name});
      // }
    }
  }

}
