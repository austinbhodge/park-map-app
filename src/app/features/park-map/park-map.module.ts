import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { ParkMapLayoutComponent } from './components/park-map-layout/park-map-layout.component';
import { ParkMapListComponent } from './components/park-map-list/park-map-list.component';
import { ParkMapComponent } from './components/park-map/park-map.component';

import { NpsParkDataService, ParkMapStateService } from './services';

import { SharedModule } from 'src/app/shared/shared.module';

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
    ParkMapListComponent
  ],
  providers: [
    NpsParkDataService,
    ParkMapStateService
  ]
})
export class ParkMapModule { }
