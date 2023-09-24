import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';
import { TableModule } from 'primeng/table';
import { take } from 'rxjs';



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
