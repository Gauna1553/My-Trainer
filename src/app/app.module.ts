import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environment/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { RutinasComponent } from './modules/rutinas/rutinas.component';
import { CrearrutinasComponent } from './modules/crearrutinas/crearrutinas.component';
import { EjerciciosComponent } from './modules/ejercicios/ejercicios.component';
import { CommonModule } from '@angular/common';
import { ConcepinfComponent } from './modules/concepinf/concepinf.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
