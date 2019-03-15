import { Component, OnInit } from '@angular/core';
import { ParkMapStateService } from '../../services';

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.scss']
})
export class ParkDetailComponent implements OnInit {

  constructor(public state: ParkMapStateService) { }

  ngOnInit() {
    console.log(this.state.get('activePark'));
  }

  closeDetail() {
    this.state.set('activePark', null);
  }

}
