import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Vsitas
import { AdminRoutingModule } from './admin-routing.module';

//Angular
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';

//PrimeNg
import { Table, TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ], 
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
