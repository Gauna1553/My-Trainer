import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';
import { RutinasRoutingModule } from './rutinas-routing.module';
import { CrearrutinasModule } from '../crearrutinas/crearrutinas.module';

import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
  RutinasComponent,
  ],
  imports: [
    CommonModule,
    RutinasRoutingModule,
    FieldsetModule,
    TableModule,
    CrearrutinasModule,
    ButtonModule,
    DialogModule
  ]
})
export class RutinasModule { }
