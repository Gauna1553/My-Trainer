import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';

import { PerfilComponent } from './modules/perfil/perfil.component';
import { RutinasComponent } from './modules/rutinas/rutinas.component';
import { CrearrutinasComponent } from './modules/crearrutinas/crearrutinas.component';
import { EjerciciosComponent } from './modules/ejercicios/ejercicios.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    PerfilComponent,
    RutinasComponent,
    CrearrutinasComponent,
    EjerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
