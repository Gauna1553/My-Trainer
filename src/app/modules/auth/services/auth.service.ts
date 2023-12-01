import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'

//Servicio de cookies para mantener al usuario logeado el tiempo que el quiera
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService{
  token: any;
  constructor(
    public auth: AngularFireAuth,  
    private cookieService: CookieService,
    ) {}
  
    async iniciarSesion(email:string, contrasena: string) {
      //Aqui se esta guardando el token de Firebase en una cookie
      const result = await this.auth.signInWithEmailAndPassword(email, contrasena);
      if (result.user) {
        this.cookieService.set('firebaseAuthToken', await result.user.getIdToken());
      }
      return result;
    }

    registrarse(email: string, contrasena: string){
      // retorna nuevo valor de nombre y contrasena
      return this.auth.createUserWithEmailAndPassword(email,contrasena);
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

  //FUNCIONES PARA VER SI ESTA LOGGEADO Y QUE TIPO DE USUARIO
  public loggedIn = new BehaviorSubject<boolean>(false);
  public userType = new BehaviorSubject<any>(undefined);

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  getUserType(){
    return this.userType.asObservable();  
  }
  login(rol: any){
    this.loggedIn.next(true);
    this.userType.next(rol)
  }
  logout(){
    this.loggedIn.complete();
    this.loggedIn = new BehaviorSubject<boolean>(false);
    this.userType.complete();
    this.userType = new BehaviorSubject<any>(undefined);
  }
}
