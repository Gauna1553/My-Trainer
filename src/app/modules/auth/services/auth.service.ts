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

  
}
