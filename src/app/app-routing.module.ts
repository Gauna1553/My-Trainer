import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { RutinasComponent } from './modules/rutinas/rutinas.component';
import { EjerciciosComponent } from './modules/ejercicios/ejercicios.component';
import { CrearrutinasComponent } from './modules/crearrutinas/crearrutinas.component';

const routes: Routes = [
  //lazyloading
  {path: "auth",
  loadChildren:()=>import('./modules/auth/auth.module').then(m =>m.AuthModule)},{
  path: 'perfil', component: PerfilComponent},{
  path: 'rutinas', component: RutinasComponent},{
  path: 'ejercicios', component: EjerciciosComponent},{
  path: 'crear', component: CrearrutinasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
