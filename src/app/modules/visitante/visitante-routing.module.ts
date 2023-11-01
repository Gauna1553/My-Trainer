import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitanteComponent } from './visitante.component';

const routes: Routes = [{ path: 'visitante', component: VisitanteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
