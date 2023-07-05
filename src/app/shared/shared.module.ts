import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from '../modules/perfil/perfil.component';
import { RutinasComponent } from '../modules/rutinas/rutinas.component';
import { CrearrutinasComponent } from '../modules/crearrutinas/crearrutinas.component';
import { EjerciciosComponent } from '../modules/ejercicios/ejercicios.component';


@NgModule({
  declarations: [
    FooterComponent,
    PerfilComponent,
    RutinasComponent,
    CrearrutinasComponent,
    EjerciciosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }