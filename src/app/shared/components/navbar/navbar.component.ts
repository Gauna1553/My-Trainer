import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  declare items: MenuItem[];
  stopExecution = true; //Esto evita que el ngOnInit se ejecute en bucle en caso de que el usuario sea admin
  //Aca lo declaramos falso como default para que por las dudas no muestre nada
  loggedIn = false;
  isAdmin: boolean = false;

  constructor(private servicioAuth: AuthService){
    
  }

  ngOnInit() {
    //Aca lo que hacemos es que al iniciar el componente se subscriba al observable que nos dice si el usuario está logeado o no
    this.servicioAuth.isLoggedIn().subscribe(isLoggedIn => {
      //Aca recibimos el valor en el parametro 'isLoggedIn' y comparamos si es verdadero o falso que está logeado
      if (isLoggedIn) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
    //Aca lo que hacemos es que al iniciar el componente se subscriba al observable que nos dice que tipo de usuario se logeo
    this.servicioAuth.getUserType().subscribe(userType => {
      if(userType === 'admin' && this.stopExecution){
        this.stopExecution = false; //Al volverse falso nos bloquea el paso en el if ya que no cumple más la condición de true
        this.isAdmin = true;
        this.ngOnInit();
      }
    })
  //Items de la navbar y sus propiedades
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
      visible: this.loggedIn
    },
    {
      label: 'Rutinas',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/rutinas',
      visible: this.loggedIn
    },
    {
      label: 'Perfil',
      icon: 'pi pi-user',
      routerLink: '/perfil',
    },{
      label: 'Administrador',
      icon: 'pi pi-id-card',
      routerLink: '/admin',
      visible: this.isAdmin
    }
  ];}
  
}
