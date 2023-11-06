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
    private cookieService: CookieService,
    ) {}
  
    async iniciarSesion(email:string, contrasena: string) {
      const result = await this.auth.signInWithEmailAndPassword(email, contrasena);
      if (result.user) {
        this.cookieService.set('firebaseAuthToken', await result.user.getIdToken());
      }
      return result;
    }
  
    cerrarSesion() {
      this.cookieService.delete('firebaseAuthToken');
      return this.auth.signOut();
    }
  async getUid(){
    //nos genera una promesa y const user la captura
    const user = await this.auth.currentUser;

    if (user == null) {
      return null;
    } else {
      let token = await user?.getIdToken();
      return user.uid;
    }
  };

  getToken() {
    return this.cookieService.get("firebaseAuthToken");
  }
}
