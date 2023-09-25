import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
  RutinasComponent,
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    TableModule,
  ]
})
export class RutinasModule { }
