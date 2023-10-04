import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './ejercicios.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { Ejercicio } from 'src/app/model/ejercicios';
import { EjerciciosService } from 'src/app/services/ejercicios.service';


@NgModule({
  declarations: [
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    EjerciciosRoutingModule, 
  ], 
  exports: [
    FormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    
  ]
})
export class EjerciciosModule { }
