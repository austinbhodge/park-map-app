import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [EllipsisPipe],
  exports: [
    AngularFontAwesomeModule,
    EllipsisPipe,
    FlexLayoutModule
  ]
})
export class SharedModule { }
