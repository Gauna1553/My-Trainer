import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearrutinasComponent } from './crearrutinas.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    CrearrutinasComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    DialogModule
  ],exports:[
    CrearrutinasComponent
  ]
})
export class CrearrutinasModule { }
