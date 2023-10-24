import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraCALComponent } from './calculadora-cal.component';
import { CalculadoraRoutingModule } from './calculadora-routing.module';


@NgModule({
  declarations: [
    CalculadoraCALComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ]
})
export class CalculadoraCALModule { }
