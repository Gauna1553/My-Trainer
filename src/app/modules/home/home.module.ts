import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

//Importacion de prime
import { Galleria, GalleriaModule } from 'primeng/galleria';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
