import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { Usuario } from 'src/app/model/usuarios';



@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {}

  get userState$() {
    return this.auth.user;
  }

  //Funcion para iniciar sesión
  async iniciarSesion(email:string,contrasena: string) {
    //Valida el email y al contraseña de la BD
    return this.auth.signInWithEmailAndPassword(email, contrasena);
    /*
      Esta función se encarga de tomar los parametros email y contraseña, y de validarlos
    */

      //this.updateUserData();
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

  private updateUserData(usuario$: Usuario) {
    const userRef: AngularFirestoreDocument<Usuario> = this.afs.doc(`usuarios/${usuario$.uid}`);
  }
}
