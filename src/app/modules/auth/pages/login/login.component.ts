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
    //Estas son las declaraciones de las importaciones de Firebase a para poder utilizar
    ){}

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    contrasena: '',
    apellido: '',
    rol: '',
    credenciales: '',
    sexo: 0,
    altura: 0,
    peso: 0,
    edad: 0

    //Arreglo en donde se guardarar en los parametros del objeto Ejercicio
  }

  async iniciar(){
    const credenciales = {
    email: this.usuarios.email,
    contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email,credenciales.contrasena)
    .then((res) => {
      alert("Se ha logeado con exito")
      //console.log(res);

      this.router.navigate(['/inicio'])
    })
    .catch(error => {
      alert('Error al loguearse :( \n' + error)
    })

    /*
      Esta función se encarga de recorrer la BD en busca de los datos de email y contraseñas almacenadas para asi poder permitirle al usuario
      inicar sesión.
    */
  }

  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert ("Se ha deslogeado correctamente");
      this.router.navigate(['/'])
    })
  }
  /*
    Esta función se encarga de permitirle al usuario poder cerrar su sesión cuando el quiera por medio de un boton al cual se le asigna esta función
  */
}