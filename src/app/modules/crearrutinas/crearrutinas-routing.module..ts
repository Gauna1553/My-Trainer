import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearrutinasComponent } from './crearrutinas.component';


const routes: Routes = [
    {path: 'crear', component: CrearrutinasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearrutinasRoutingModule { }