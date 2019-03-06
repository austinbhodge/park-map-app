import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkMapLayoutComponent } from './features/park-map/components/park-map-layout/park-map-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ParkMapLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
