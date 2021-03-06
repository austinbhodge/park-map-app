import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ParkMapModule } from './features';
import { ParkMapResolve } from './features/park-map/park-map.resolve';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ParkMapModule,
    SharedModule
  ],
  providers: [ParkMapResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
