import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {}

  registrarse(nombre: string, contrasena: string) {
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena)
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Usuario registrado exitosamente
    })
    .catch((error) => {
        // Manejar el error, como el caso del correo electrónico inválido
    });
}
