import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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

  const res = await this.servicioAuth.registrarse(credenciales.email,credenciales.contrasena)
}
}
