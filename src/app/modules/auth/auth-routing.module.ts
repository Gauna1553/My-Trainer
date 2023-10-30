import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  //rutas secundatias
  {path:"login",canActivate:[authGuard],component: LoginComponent},
  {path:"register",canActivate:[authGuard],component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
