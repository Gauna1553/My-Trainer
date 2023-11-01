import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraCALComponent } from './calculadora-cal.component';
import { CalculadoraRoutingModule } from './calculadora-routing.module';

//Importaciones de Prime
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';




@NgModule({
  declarations: [
    CalculadoraCALComponent
    ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TriStateCheckboxModule,
    ProgressSpinnerModule,
    DropdownModule
  ],
  exports: [
    TableModule,
    FormsModule
  ]
})
export class CalculadoraCALModule { }
