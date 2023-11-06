import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';

//importaciones de prime
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
  RutinasComponent,
  ],
  imports: [
    CommonModule,
    FieldsetModule,
    TableModule
  ]
})
export class RutinasModule { }
