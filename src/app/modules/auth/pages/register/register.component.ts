import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/model/usuarios';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //esto es el input

usuarios: Usuario = {
  uid: '',
  nombre: '',
  apellido: '',
  email: '',
  contrasena: '',
  rol: '',
  token: '',
  sexo: '',
  edad: 0,
  altura: 0,
  peso: 0,
  imc: 0,
}

  uid = '';

  //creamos una nueva collecion para usuarios
  coleccionUsuarios: Usuario[] = [];

constructor (public servicioAuth: AuthService, public servicioFirestore: FirestoreService, public router: Router) {
  }

  //tomamos nuevos registros y tomamos los resultados
  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena,
    }

  const res = await this.servicioAuth.registrarse(credenciales.email!,credenciales.contrasena!).then(res => {
    alert("se agrego un nuevo usuario con exito")

    console.log(res)

    this.router.navigate(['/login']);

  })
  .catch(error => alert("Hubo un error la registrarse: (\n"+error));
  const uid = await this.servicioAuth.getUid();

  //guarda un nuevo usuario
  this.usuarios.uid = uid;

  this.guardarUser();
    /*
      Esta función toma los valores de email y contraseña, y los valida para así permitir al usuario registrarse.
    */
}

  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      //console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error =>',error)
    })
    /*
      Esta función se encarga de guardar a los usuarios creados con la función de arriba, la BD.
      
      BD= Base de Datos
      
    */
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid)
  }
};
