import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutinasComponent } from './rutinas.component';


const routes: Routes = [
    {path: 'rutinas', component: RutinasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutinasRoutingModule { }