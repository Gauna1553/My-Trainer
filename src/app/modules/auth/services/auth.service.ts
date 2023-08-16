import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {}

  registrarse(nombre:string, apellidos:string, email:string, contrasena:string) {
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena)
  }
}
