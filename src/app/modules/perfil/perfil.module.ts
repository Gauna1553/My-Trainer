import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';

//Importacion de prime
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class PerfilModule { }
