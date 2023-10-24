import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraCALComponent } from './calculadora-cal.component';


const routes: Routes = [
    {path: 'calculadora', component: CalculadoraCALComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule { }
