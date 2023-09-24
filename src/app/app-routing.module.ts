import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { RutinasComponent } from './modules/rutinas/rutinas.component';
import { EjerciciosComponent } from './modules/ejercicios/ejercicios.component';
import { CrearrutinasComponent } from './modules/crearrutinas/crearrutinas.component';
import { HomeComponent } from './modules/home/home.component';

import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { ConcepinfComponent } from './modules/concepinf/concepinf.component';

const routes: Routes = [
   //lazyloading
  {path: "auth",
  loadChildren:()=>import('./modules/auth/auth.module').then(m =>m.AuthModule)},{
  path: '', component: HomeComponent},{   //ruta de home
  path: 'perfil', loadChildren:()=>import('./modules/perfil/perfil.module').then(m=>m.PerfilModule)},{   //ruta de perfil
  path: 'rutinas', loadChildren:()=>import('./modules/rutinas/rutinas.module').then(m=>m.RutinasModule)},{   //ruta de rutinas
  path: 'ejercicios', loadChildren:()=>import('./modules/ejercicios/ejercicios.module').then(m=>m.EjerciciosModule)},{   //ruta de ejercicios
  //path: 'crear', component: CrearrutinasComponent},{   //ruta de crearrutinas
  path: 'login', component:LoginComponent}, { //ruta del login
  path: 'register', component:RegisterComponent}, { //ruta del regiser
  path: 'conceps', component:ConcepinfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
