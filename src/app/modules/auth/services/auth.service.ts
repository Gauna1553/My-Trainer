import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {}

  //Funcion para iniciar sesión
  iniciarSesion(email:string,contrasena: string){
    //Valida el email y al contraseña de la BD
    return this.auth.signInWithEmailAndPassword(email, contrasena);
    /*
      Esta función se encarga de tomar los parametros email y contraseña, y de validarlos
    */
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
    return this.auth.signOut();
  }

}
