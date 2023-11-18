import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';
import { RutinasRoutingModule } from './rutinas-routing.module';
import { CrearrutinasModule } from '../crearrutinas/crearrutinas.module';


//importaciones de prime
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
  RutinasComponent,
  ],
  imports: [
    CommonModule,
    RutinasRoutingModule,

    //Imporaciones de prime
    FieldsetModule,
    TableModule,
    CrearrutinasModule,
    ButtonModule
  ]
})
export class RutinasModule { }
