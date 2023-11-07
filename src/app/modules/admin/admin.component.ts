import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  database = '';
  submitted = false;

  //Creo un arreglo para guardar la información que despues se recorre para
  //armar la tabla
  usuariosCollecion: Usuario[] = [];
  
  usuarioSeleccionado!: Usuario;

  editar = false;

  idEditar = '';

  //Defino la visibilidad del pop up como falsa de forma defualt
  usuariosDialog: boolean = false;
  //Defino la visibilidad del loading
  loading = false;

  usuarios!: Usuario;

  constructor(public usuariosService: UsuariosService) {}

  ngOnInit() {
    /*Llamamos a la función obtenerUsuario y le enviamos los nuevos valores
    del formulario producto(estos se guardaran en la colección) */
    this.usuariosService.obtenerUsuario().subscribe(usuarios => {
      this.usuariosCollecion = usuarios

      //Es una colección para así poder seleccionar a más de un elemento
    })
  }

  usuarioss: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    rol: '',
    token: '',
    sexo: 0,
    edad: 0,
    altura: 0,
    peso: 0
  }
}
