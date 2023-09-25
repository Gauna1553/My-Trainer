import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './rutinas.component';
import { RutinasRoutingModule } from './rutinas-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
  RutinasComponent
  ],
  imports: [
    CommonModule,
    RutinasRoutingModule,
    FieldsetModule,
    TableModule
  ]
})
export class RutinasModule { }
