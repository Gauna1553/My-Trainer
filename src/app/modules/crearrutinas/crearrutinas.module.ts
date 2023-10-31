import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearrutinasComponent } from './crearrutinas.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    CrearrutinasComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    DialogModule,
    InputTextModule
  ],exports:[
    CrearrutinasComponent,
    InputTextModule
  ]
})
export class CrearrutinasModule { }
