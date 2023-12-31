import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

//Servicios importados
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';



//Importaciones de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { Observable, tap } from 'rxjs';



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
    public router: Router,
    private afAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private http: HttpClient,
    private cookieService: CookieService
    //Estas son las declaraciones de las importaciones de Firebase a para poder utilizar
  ) { }
  
  //Aca lo declaramos falso como default para que por las dudas no muestre nada
  loggedIn = false;

  ngOnInit() {
    //Aca lo que hacemos es que al iniciar el componente se subscriba al observable que nos dice si el usuario esta logeado o no
    this.servicioAuth.isLoggedIn().subscribe(isLoggedIn => {
      //Aca recibimos el valor en el parametro 'isLoggedIn' y comparamos si es verdadero o falso que esta logeado
      if (isLoggedIn) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
  }


  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    rol: '',
    token: '',
    sexo: '',
    edad: 0,
    altura: 0,
    peso: 0,
    imc: 0,
    //Arreglo en donde se guardarar en los parametros del objeto Ejercicio
  }

  async iniciar() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
      //guarda los parametros email y constraseña en una constante
    };

    const res = await this.servicioAuth.iniciarSesion(credenciales.email!, credenciales.contrasena!)
      .then((res) => {
        ///////Base de datos///////
        this.afAuth.authState.subscribe(usuario => {
          if (usuario) {
            this.fireStore.collection('usuarios').doc(usuario.uid).valueChanges().subscribe((data: any) => {
              //Aqui se obtienen las credenciales del usuario
              this.servicioAuth.login(data.rol)
              //Rediriges al usuario basado en sus credenciales
              this.router.navigate(['/'])
            })
          } /*else {
          //Usuario no logeado
          alert('No se ha podido ingresar')
          this.router.navigate(['/inicio']);
        }*/
        })
      }).catch((error) => {
        console.error(error)
        //Usuario no valido
      });

    /*
      Esta función se encarga de recorrer la BD en busca de los datos de email y contraseñas almacenadas para asi poder permitirle al usuario
      inicar sesión.
    */
  }

}