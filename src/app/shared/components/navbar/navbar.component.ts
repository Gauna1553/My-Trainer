import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/model/usuarios';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  declare items: MenuItem[];
  isAdmin: boolean = false

  constructor(private servicioAuth: AuthService){
    this.servicioAuth.getUserType().subscribe(userType => {
      if(userType === 'admin'){
        this.isAdmin = true;
        this.ngOnInit();
      }
    })
  }

  ngOnInit() {
  this.items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'Ejercicios',
      icon: 'pi pi-fw pi-pencil',
      routerLink: '/ejercicios',
    },
    {
      label: 'Rutinas',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/rutinas',
    },
    {
      label: 'Perfil',
      icon: 'pi pi-user',
      routerLink: '/perfil',
    },{
      label: 'Administrador',
      routerLink: '/admin',
      visible: this.isAdmin
    }
  ];}
  
}
