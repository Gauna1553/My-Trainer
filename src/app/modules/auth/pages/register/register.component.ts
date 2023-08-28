import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/model/usuarios';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;

usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    contrasena: ''
}

  uid = '';

  //creamos una nueva collecion para usuarios
  coleccionUsuarios: Usuario[] = [];

constructor (public servicioAuth: AuthService, public servicioFirestore: FirestoreService) {
  }

  //tomamos nuevos registros y tomamos los resultados
  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena,
    }

  const res = await this.servicioAuth.registrarse(credenciales.email,credenciales.contrasena).then(res => {
    alert("se agrego un nuevo usuario con exito")
  })
  .catch(error => alert("Hubo un error la registrarse: (\n"+error));
  const uid = await this.servicioAuth.getUid();

  //guarda un nuevo usuario
  this.usuarios.uid = uid;
}

  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error =>',error)
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid)
  }
};
