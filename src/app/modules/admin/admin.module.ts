import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Vsitas
import { AdminRoutingModule } from './admin-routing.module';

//Angular
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
