import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  declare items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/inicio',
      },
      {
        label: 'Ejercicios',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/ejercicios',
      },
      {
        label: 'Rutinas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/rutinas'
      },
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        routerLink: '/perfil',
      },
    ];
  }
}
