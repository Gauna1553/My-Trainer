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
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


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
    TriStateCheckboxModule,
    ProgressSpinnerModule
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
