import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './ejercicios.component';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';


//Importaciones de Prime
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';




@NgModule({
  declarations: [
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TriStateCheckboxModule,
    ProgressSpinnerModule,
  ], 
  exports: [
    FormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule
  ]
})
export class EjerciciosModule { }
