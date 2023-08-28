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
    apellido: '',
    email: '',
    contrasena: ''
}

  uid = '';

  //creamos una nueva collecion para usuarios
  coleccionUsuarios: Usuario[] = [];

constructor (public servicioAuth: AuthService) {
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
  console.log(res);
}
}
