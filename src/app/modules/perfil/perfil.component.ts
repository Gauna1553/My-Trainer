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
  loggedIn = false;

  ngOnInit(){
    this.servicioAuth.isLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn){
        this.loggedIn = true
      }else{
        this.loggedIn = false;
      }
    })
  }
}
