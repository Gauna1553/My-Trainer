import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { Router } from '@angular/router';

//Servicios importados
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';



//Importaciones de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'



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
    public router :Router,
    private afAuth: AngularFireAuth
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
    };

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then ((res) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.firestore.colecction('usuarios').doc(user.uid).valueChanges().subscribe((data: any)=> {
            //Aqui se obtienen las credenciales del usuario
            const credenciales = data.credenciales;

            //Rediriges al usuario basado en sus credenciales
            if (credenciales === 'user') {
              this.router.navigate(['/inicio']);
            } else {
              if (credenciales === 'admin') {
                this.router.navigate(['/admin']);
              } else {
                this.router.navigate(['/visitante'])
              }
            }
          })
        } else {
          //Usuario no logeado
          this.router.navigate(['/login']);
        }
      })
    }) .catch((error) => {
      console.error(error)
      //Usuario no valido
    });

    /*
      Esta función se encarga de recorrer la BD en busca de los datos de email y contraseñas almacenadas para asi poder permitirle al usuario
      inicar sesión.
    */
  }

  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert ("Se ha deslogeado correctamente");
      this.router.navigate(['/login'])
    })
  }
  /*
    Esta función se encarga de permitirle al usuario poder cerrar su sesión cuando el quiera por medio de un boton al cual se le asigna esta función
  */
}