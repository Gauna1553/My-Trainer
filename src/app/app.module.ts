import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EjerciciosService } from './services/ejercicios.service';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environment/environment';
import { EjerciciosModule } from './modules/ejercicios/ejercicios.module';
import { CrearrutinasModule } from './modules/crearrutinas/crearrutinas.module';
import { HomeModule } from './modules/home/home.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { RutinasModule } from './modules/rutinas/rutinas.module';
import { ConcepinfModule } from './modules/concepinf/concepinf.module';


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
    ConcepinfModule
  ],exports: [
  ],

  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
