import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';
import { RutinasRoutingModule } from './rutinas-routing.module';

//importaciones de prime
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
  RutinasComponent,
  ],
  imports: [
    CommonModule,
    RutinasRoutingModule,

    //Imporaciones de prime
    FieldsetModule,
    TableModule
  ]
})
export class RutinasModule { }
