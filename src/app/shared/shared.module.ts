import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from '../modules/perfil/perfil.component';
import { RutinasComponent } from '../modules/rutinas/rutinas.component';
import { CrearrutinasComponent } from '../modules/crearrutinas/crearrutinas.component';
import { EjerciciosComponent } from '../modules/ejercicios/ejercicios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from '../modules/home/home.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    PerfilComponent,
    RutinasComponent,
    CrearrutinasComponent,
    EjerciciosComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class SharedModule { }
