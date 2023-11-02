import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/model/usuarios';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  declare items: MenuItem[];
  mostrar: boolean = false


  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    contrasena: '',
    apellido: '',
    rol: '',
    sexo: 0,
    altura: 0,
    peso: 0,
    edad: 0
  }

  mostrarDatos(usuarios : Usuario) {
    if (usuarios.rol === 'visitante') {
      this.mostrar = true;
    }
  };


  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/inicio',
        mostrar: this.mostrarDatos,
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
};