import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './ejercicios.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog'




@NgModule({
  declarations: [
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
  ], 
  exports: [
    FormsModule,
    DialogModule,
    
  ]
})
export class EjerciciosModule { }
