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
import { ConcepinfComponent } from './modules/concepinf/concepinf.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environment/environment';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    PerfilComponent,
    RutinasComponent,
    CrearrutinasComponent,
    EjerciciosComponent,
    ConcepinfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    //importar firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
