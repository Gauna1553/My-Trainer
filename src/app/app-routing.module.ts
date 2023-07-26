import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { RutinasComponent } from './modules/rutinas/rutinas.component';
import { EjerciciosComponent } from './modules/ejercicios/ejercicios.component';
import { CrearrutinasComponent } from './modules/crearrutinas/crearrutinas.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
   //lazyloading
  {path: "auth",
  loadChildren:()=>import('./modules/auth/auth.module').then(m =>m.AuthModule)},{
  path: '', component: HomeComponent},{   //ruta de home
  path: 'perfil', component: PerfilComponent},{   //ruta de perfil
  path: 'rutinas', component: RutinasComponent},{   //ruta de rutinas
  path: 'ejercicios', component: EjerciciosComponent},{   //ruta de ejercicios
  path: 'crear', component: CrearrutinasComponent   //ruta de crearrutinas
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
