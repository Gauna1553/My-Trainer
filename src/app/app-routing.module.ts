import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
   //lazyloading
  {path: "",
  loadChildren:()=>import('./modules/auth/auth.module').then(m =>m.AuthModule)},
  {path: 'inicio', component: HomeComponent},{   //ruta de home
  // SE DEJAN ESTAS RUTAS VACIAS PORQUE YA SE DECLARARON EN CADA UNO DE LOS ROUTING 
  path: '', loadChildren:()=>import('./modules/perfil/perfil.module').then(m=>m.PerfilModule)},{   //ruta de perfil
  path: '', loadChildren:()=>import('./modules/rutinas/rutinas.module').then(m=>m.RutinasModule)},{   //ruta de rutinas
  path: '', loadChildren:()=>import('./modules/ejercicios/ejercicios.module').then(m=>m.EjerciciosModule)},{   //ruta de ejercicios
  //path: 'crear', component: CrearrutinasComponent},{   //ruta de crearrutinas
  path: '', loadChildren:()=>import('./modules/concepinf/concepinf.module').then(m=>m.ConcepinfModule)},{ //ruta de concepinf
  path: '', loadChildren:()=>import('./modules/calculadora-cal/calculadora-cal.module').then(m=>m.CalculadoraCALModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
