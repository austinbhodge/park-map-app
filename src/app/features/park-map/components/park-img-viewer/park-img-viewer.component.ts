import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-park-img-viewer',
  templateUrl: './park-img-viewer.component.html',
  styleUrls: ['./park-img-viewer.component.scss']
})
export class ParkImgViewerComponent implements OnInit {
  @Input() parkImages = [];

  constructor() { }

  ngOnInit() {
    console.log(this.parkImages);
  }

}
