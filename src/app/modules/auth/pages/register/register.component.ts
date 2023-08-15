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

 //tomamos nuevos registros y tomamos los resultados
  async registrarse() {
    const credenciales = {
      nombre: this.usuarios.nombre,
      contraseña: this.usuarios.contrasena,
    }
  
  const res = await this.servicioAuth.registrarse(credenciales.nombre,credenciales.contraseña).then(res => {
    alert("se agrego un nuevo usuario con exito")
  })
  .catch(error => alert("Hubo un error la registrarse: (\n"+error));
  console.log(res);
}
}
