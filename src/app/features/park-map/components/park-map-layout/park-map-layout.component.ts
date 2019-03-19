import { Component } from '@angular/core';
import { ParkMapStateService } from '../../services';

@Component({
  selector: 'app-park-map-layout',
  templateUrl: './park-map-layout.component.html',
  styleUrls: ['./park-map-layout.component.scss']
})
export class ParkMapLayoutComponent {

  constructor(public state: ParkMapStateService) { }

}
