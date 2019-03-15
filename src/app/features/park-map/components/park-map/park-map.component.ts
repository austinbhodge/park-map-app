import { Component, OnInit, Input } from '@angular/core';
import { ParkMapStateService } from '../../services';
import { find } from 'lodash';

@Component({
  selector: 'app-park-map',
  templateUrl: './park-map.component.html',
  styleUrls: ['./park-map.component.scss']
})
export class ParkMapComponent implements OnInit {
  @Input() parkPins;

  constructor(public state: ParkMapStateService) { }

  ngOnInit() {}

  setActivePark(pin) {
    const activePark = find(this.state.get('parkList'), park => park.id === pin.id);
    this.state.set('activePark', activePark);
    this.state.set('mapCenter', [activePark.longitude, activePark.latitude]);
  }

  boundsChanged(mapEvent) {
    console.log(mapEvent.target.getBounds());
    this.state.set('mapBounds', mapEvent.target.getBounds());
  }

  mapLoaded(map) {
    console.log(map.getBounds());
    this.state.set('mapBounds', map.getBounds());
  }

}
