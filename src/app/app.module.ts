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
import { FormsModule } from '@angular/forms';
import { EjerciciosModule } from './modules/ejercicios/ejercicios.module';
import { CrearrutinasModule } from './modules/crearrutinas/crearrutinas.module';
import { HomeModule } from './modules/home/home.module';


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
    EjerciciosModule,
    CrearrutinasModule,
    HomeModule
  ],exports: [
    FormsModule,
  ],

  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
