import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Vsitas
import { AdminRoutingModule } from './admin-routing.module';

//Angular
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';

//PrimeNg
import { Table, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    TriStateCheckboxModule,
    ProgressSpinnerModule,
    DropdownModule
  ], 
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
