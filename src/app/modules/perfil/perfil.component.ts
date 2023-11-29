import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(private servicioAuth: AuthService) {}
  //Aca lo declaramos falso como default para que por las dudas no muestre nada
  loggedIn = false;

  ngOnInit(){
    //Aca lo que hacemos es que al iniciar el componente se subscriba al observable que nos dice si el usuario esta logeado o no
    this.servicioAuth.isLoggedIn().subscribe(isLoggedIn => {
      //Aca recibimos el valor en el parametro 'isLoggedIn' y comparamos si es verdadero o falso que esta logeado
      if (isLoggedIn){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    })
  }
}
