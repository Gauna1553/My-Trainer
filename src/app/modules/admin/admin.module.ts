import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Vsitas
import { AdminRoutingModule } from './admin-routing.module';

//Angular
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';

//PrimeNg
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    //Importaciones de Primeng
    FormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    TriStateCheckboxModule,
    ProgressSpinnerModule,
    PasswordModule
  ], 
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
