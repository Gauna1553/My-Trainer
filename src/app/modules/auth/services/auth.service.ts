import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { Usuario } from 'src/app/model/usuarios';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario$: Observable<Usuario>

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {
    this.usuario$ = this.auth.authState.pipe(
      switchMap( usuario$ => {
        if (usuario$) {
          return this.afs.doc<Usuario>(`usuarios/${usuario$.uid}`).valueChanges();
        }
        return of (null);
      })
    )
  }

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

  private updateUserData(usuario$: Usuario) {
    const userRef: AngularFirestoreDocument<Usuario> = this.afs.doc(`usuarios/${usuario$.uid}`);

    const data: Usuario = {
      uid: usuario$.uid,
      email: usuario$.email,
      contrasena: usuario$.contrasena,
      nombre: usuario$.nombre,
      apellido: usuario$.apellido,
    };
    return userRef.set(data, {merge: true})
  }
}
