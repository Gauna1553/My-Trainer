import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuarios!: Usuario[];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit () {
   
  }
}
