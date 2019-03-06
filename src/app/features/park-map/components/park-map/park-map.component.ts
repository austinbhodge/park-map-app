import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-park-map',
  templateUrl: './park-map.component.html',
  styleUrls: ['./park-map.component.scss']
})
export class ParkMapComponent implements OnInit {
  @Input() parkPins;
  @Output() parkSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
