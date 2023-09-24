import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';
import { RutinasRoutingModule } from './rutinas-routing.module';



@NgModule({
  declarations: [
  RutinasComponent
  ],
  imports: [
    CommonModule,
    RutinasRoutingModule
  ]
})
export class RutinasModule { }
