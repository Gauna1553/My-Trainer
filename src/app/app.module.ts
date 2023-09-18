import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Los modulos para los formularos de login y register
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environment/environment'; //Es donde se encuentra alojado nuestra base de datos

//Los modulos de cada componente
import { EjerciciosModule } from './modules/ejercicios/ejercicios.module';
import { CrearrutinasModule } from './modules/crearrutinas/crearrutinas.module';
import { HomeModule } from './modules/home/home.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { RutinasModule } from './modules/rutinas/rutinas.module';
import { ConcepinfModule } from './modules/concepinf/concepinf.module';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // LAS ANIMACIONES DE PRIME

//Los servicios creados
import { EjerciciosService } from './services/ejercicios.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    //importar firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // MODULOS DE LOS COMPONENTES DE LA INTERFAZ
    EjerciciosModule,
    CrearrutinasModule,
    HomeModule,
    PerfilModule,
    RutinasModule,
    ConcepinfModule,
    BrowserAnimationsModule
  ],exports: [
  ],

  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
