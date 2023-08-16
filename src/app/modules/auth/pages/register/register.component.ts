import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/model/usuarios';


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
  apellidos: '',
  email: '',
  contrasena: ''
}

constructor (public servicioAuth: AuthService) {}

async registrarse() {
  const credenciales = {
    nombre: this.usuarios.nombre,
    apellidos: this.usuarios.apellidos,
    email: this.usuarios.email,
    contrasena: this.usuarios.contrasena
  }

    const res = await this.servicioAuth.registrarse(credenciales.nombre,credenciales.contrasena,credenciales.apellidos,credenciales.email).then(res => {
      alert("Se agrego un nuevo usuario con exito")
    })
    .catch(error => alert("Hubo un error al registrarse: (\n"+error));
    console.log(res);
}
}
