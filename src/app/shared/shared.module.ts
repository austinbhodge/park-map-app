import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    AngularFontAwesomeModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
