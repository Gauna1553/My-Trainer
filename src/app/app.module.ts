import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { RutinasComponent } from './modules/rutinas/rutinas.component';
import { CrearrutinasComponent } from './modules/crearrutinas/crearrutinas.component';
import { EjerciciosComponent } from './modules/ejercicios/ejercicios.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environment/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { EjerciciosService } from './services/ejercicios.service';
import { FirestoreModule } from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PerfilComponent,
    RutinasComponent,
    CrearrutinasComponent,
    EjerciciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    DialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    FirestoreModule
  
  ],exports: [
    FormsModule
  ],

  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
