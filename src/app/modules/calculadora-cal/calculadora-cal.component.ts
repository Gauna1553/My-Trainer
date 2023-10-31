import { Component } from '@angular/core';
import { DatoUsuarios, Usuario } from 'src/app/model/usuarios';
import { DatosService } from 'src/app/shared/services/datos.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-cal',
  templateUrl: './calculadora-cal.component.html',
  styleUrls: ['./calculadora-cal.component.css']
})

export class CalculadoraCALComponent {

  constructor (public servicioDatos: DatosService) {}

  //Defino la visibilidad del pop up
  datosDialog: boolean = false

  submitted: any;

  datosColección: Usuario[] = [];

  datosSeleccionado!: Usuario;

  loading = false;

  datos: DatoUsuarios = {
    sexo: 0,
    altura: 0,
    peso: 0,
    edad: 0,
    uid: '',
  }

  //Esta función se encarga de abrir el pop up
  openNew() {
    this.submitted = false;
    this.datosDialog = true;
  }

  //Esta función se encarga de cerrar el pop up
  hideDialog() {
    this.datosDialog = false;
    this.datos.altura = 0;
    this.datos.peso = 0;
    this.datos.sexo = 0;
    this.datos.edad = 0;
  }
  
  async guardarDatos(){
    this.servicioDatos.agregarDatos(this.datos.uid, this.datos.altura,this.datos.edad,this.datos.peso,this.datos.sexo)
    .then(res =>{
      //console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error =>',error)
    })
  }


  editarDatos(datosSeleccionado:Usuario) {
    this.datosSeleccionado = datosSeleccionado;
  }

  edtiDatos() {
    let datos: DatoUsuarios = {
      uid: this.datos.uid,
      edad: this.datos.edad,
      altura: this.datos.altura,
      peso: this.datos.peso,
      sexo: this.datos.sexo,
    }

    this.servicioDatos.modificarDatos
  }
};


