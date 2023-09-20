import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './ejercicios.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule
  ], 
  exports: [
    FormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule
  ]
})
export class EjerciciosModule { }
