import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearrutinasComponent } from './crearrutinas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearrutinasRoutingModule } from './crearrutinas-routing.module.';


//Importaciones de PrimeNG
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    CrearrutinasComponent
  ],
  imports: [
    CommonModule,
    CrearrutinasRoutingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ListboxModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    CrearrutinasComponent,
  ]
})
export class CrearrutinasModule { }
