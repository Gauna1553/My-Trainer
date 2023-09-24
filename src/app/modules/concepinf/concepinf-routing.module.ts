import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcepinfComponent } from './concepinf.component';


const routes: Routes = [
    {path: 'concepinf', component: ConcepinfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcepinfRoutingModule { }