import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { ParkMapLayoutComponent } from './components/park-map-layout/park-map-layout.component';
import { ParkMapListComponent } from './components/park-map-list/park-map-list.component';
import { ParkMapComponent } from './components/park-map/park-map.component';

import { NpsParkDataService, ParkMapStateService, ClientLocationService } from './services';

import { SharedModule } from '../../shared/shared.module';
import { ParkDetailComponent } from './components/park-detail/park-detail.component';
import { ParkMapResolve } from './park-map.resolve';
import { ParkListCardComponent } from './components/park-list-card/park-list-card.component';


@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYXVzdGluYmhvZGdlIiwiYSI6ImNqc3Z4ZWY2cTBiczc0NG1tcDZveGRoa2EifQ.zO6DBSpZws2QVvlMNdBX-g'
    }),
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    ParkMapComponent,
    ParkMapLayoutComponent,
    ParkMapListComponent,
    ParkDetailComponent,
    ParkListCardComponent
  ],
  providers: [
    ParkMapResolve,
    ClientLocationService,
    NpsParkDataService,
    ParkMapStateService
  ]
})
export class ParkMapModule { }
