import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearrutinasComponent } from './crearrutinas.component';

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
    ListboxModule
  ],exports:[
    CrearrutinasComponent,
  ]
})
export class CrearrutinasModule { }
