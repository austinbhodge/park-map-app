import { Component, OnInit, Input } from '@angular/core';
import { ParkMapStateService } from '../../services';

@Component({
  selector: 'app-park-map-list',
  templateUrl: './park-map-list.component.html',
  styleUrls: ['./park-map-list.component.scss']
})
export class ParkMapListComponent implements OnInit {
  @Input() parkList = [];

  constructor(public state: ParkMapStateService) { }

  ngOnInit() {
  }

}
