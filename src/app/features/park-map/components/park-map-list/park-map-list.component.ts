import { Component, Input } from '@angular/core';
import { ParkMapStateService } from '../../services';

@Component({
  selector: 'app-park-map-list',
  templateUrl: './park-map-list.component.html',
  styleUrls: ['./park-map-list.component.scss']
})
export class ParkMapListComponent {
  @Input() parkList = [];

  constructor(public state: ParkMapStateService) { }

}
