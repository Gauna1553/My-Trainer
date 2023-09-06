import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './ejercicios.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule
  ], 
  exports: [
    FormsModule,
    DialogModule,
    InputTextModule
  ]
})
export class EjerciciosModule { }
