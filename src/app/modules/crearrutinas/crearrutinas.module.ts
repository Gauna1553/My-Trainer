import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearrutinasComponent } from './crearrutinas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importaciones de PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    CrearrutinasComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
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
