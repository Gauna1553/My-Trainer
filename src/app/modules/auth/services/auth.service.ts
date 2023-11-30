import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'

//Servicio de cookies para mantener al usuario logeado el tiempo que el quiera
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/model/usuarios';



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
  public loggedIn = new BehaviorSubject<boolean>(false); // Este observable almacena un booleano segun si se esta logeado o no
  public userType = new BehaviorSubject<any>(undefined); // Este observable almacena el rol del usuario actual 

  // Esta funcion devuelve el valor altual del logeo, solamente puede ser true o false
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  // Esta funcion devuelve el valor del rol del logeo, ya sea admin, usuario o undefined
  getUserType(){
    return this.userType.asObservable();  
  }
  // Esta funcion envia los valores al observable cuando se logean
  login(rol: any){
    this.loggedIn.next(true); // Convierte el loggedIn en verdadero ya que esta logeado
    this.userType.next(rol) // Pasa el rol del usuario que se logeo
  }
  // Esta funcion aunque no es del todo necesaria, borra los observables y crea unos nuevos para que no se acumulen
  logout(){
    this.loggedIn.complete();
    this.loggedIn = new BehaviorSubject<boolean>(false);
    this.userType.complete();
    this.userType = new BehaviorSubject<any>(undefined);
  }
}
