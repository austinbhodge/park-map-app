import { Component, OnInit, Input } from '@angular/core';
import { ParkMapStateService } from '../../services';

@Component({
  selector: 'app-park-list-card',
  templateUrl: './park-list-card.component.html',
  styleUrls: ['./park-list-card.component.scss']
})
export class ParkListCardComponent implements OnInit {
  @Input() park;

  iconMap = {
    'National Park': 'tree',
    'National Historical Park': 'scroll',
    'Park': 'tree',
    'Memorial Parkway': 'road',
    'National Battlefield': 'skull-crossbones',
    'National Historic Site': 'archway',
    'National Historic Trail': 'hiking',
    'National Monument': 'monument',
    'National Seashore': 'umbrella-beach'
  };

  constructor(public state: ParkMapStateService) { }

  ngOnInit() {
  }

  setActivePark() {
    this.state.set('activePark', this.park);
    console.log(this.park);
    this.state.set('mapCenter', [this.park.longitude, this.park.latitude]);
    this.state.set('mapZoom', [11]);
  }

  getIcon(designation) {
    if (this.iconMap[designation]) {
      return this.iconMap[designation];
    } else {
      return 'landmark';
    }
  }
}
