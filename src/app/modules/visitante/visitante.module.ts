import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitanteRoutingModule } from './visitante-routing.module';
import { VisitanteComponent } from './visitante.component';


@NgModule({
  declarations: [
    VisitanteComponent
  ],
  imports: [
    CommonModule,
    VisitanteRoutingModule
  ]
})
export class VisitanteModule { }
