import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-park-map-list',
  templateUrl: './park-map-list.component.html',
  styleUrls: ['./park-map-list.component.scss']
})
export class ParkMapListComponent implements OnInit {
  @Input() parkList = [];

  constructor() { }

  ngOnInit() {
  }

}
