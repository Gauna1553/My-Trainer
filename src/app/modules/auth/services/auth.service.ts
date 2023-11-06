import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'

//Servicio de cookies para mantener al usuario logeado el tiempo que el quiera
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(
    public auth: AngularFireAuth,  
    private cookieService: CookieService) {}

  //Funcion para iniciar sesión
  async iniciarSesion(email:string,contrasena: string) {
    //Valida el email y al contraseña de la BD
    return this.auth.signInWithEmailAndPassword(email, contrasena);
    this.auth.authState.subscribe(
      async user =>  {
        await user?.getIdToken()
        .then(
          token => {
            this.cookieService.set("idToken", token)
          }
        ) 
        .catch(
          error => {
            console.error("Ocurrio un error: ", error);
            
          }
        )
      }
    )
    
    //Esta función se encarga de tomar los parametros email y contraseña, y de validarlos
  }


  //Funcion para registrarse
  registrarse(email: string, contrasena: string) {
    //Retorna un nuevo valor de nombre y contraseña
    return this.auth.createUserWithEmailAndPassword(email,contrasena)
  }

  async getUid(){
    //nos genera una promesa y const user la captura
    const user = await this.auth.currentUser;

    if (user == null) {
      return null;
    } else {
      return user.uid;
    }
  };

  cerrarSesion() {
    //devuelve una promesa vacias
    this.cookieService.delete('firebaseAuthToken')
    return this.auth.signOut();
  }

  get token() {
    return this.auth.idToken;
  }
}
