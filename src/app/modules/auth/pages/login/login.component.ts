import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Usuario } from 'src/app/model/usuarios';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true; //esto es el input

  constructor(
    public servicioAuth: AuthService,
    public firestore: FirestoreService,
    public router :Router
    ){}

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    contrasena: '',
    rol: '',
    apellido: ''
  }

  async iniciar(){
    const credenciales = {
    email: this.usuarios.email,
    contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email,credenciales.contrasena)
    .then(res => {
      alert("Se ha logeado con exito")
      //console.log(res);

      this.router.navigate(['/'])
    })
    .catch(error => {
      alert('Error al loguearse :( \n' + error)
    })
  }
}