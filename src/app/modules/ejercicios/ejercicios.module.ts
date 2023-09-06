import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './ejercicios.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule
  ], 
  exports: [
    FormsModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class EjerciciosModule { }
