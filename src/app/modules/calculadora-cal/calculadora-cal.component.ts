import { Component } from '@angular/core';
import { DatoUsuarios, Usuario } from 'src/app/model/usuarios';
import { DatosService } from 'src/app/shared/services/datos.service';
import { OnInit } from '@angular/core';

interface Gens {
  name: string,
  code : string,
}

@Component({
  selector: 'app-calculadora-cal',
  templateUrl: './calculadora-cal.component.html',
  styleUrls: ['./calculadora-cal.component.css']
})

export class CalculadoraCALComponent {

  constructor (public servicioDatos: DatosService) {}

  //Defino la visibilidad del pop up
  datosDialog: boolean = false

  generos: Gens[] | undefined;

  selectedGens: Gens | undefined;

  database = '';

  submitted: any;

  datosColeccion: DatoUsuarios[] = [];

  datosSeleccionado!: DatoUsuarios;

  loading = false;

  datos: DatoUsuarios = {
    sexo: '',
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
    this.datos.sexo = '';
    this.datos.edad = 0;
  }

  ngOnInit() {
    this.generos = [
      {name : '', code: ''},
      {name : 'Masculino', code: 'M'},
      {name : 'Femenino', code: 'F'},
      {name : 'Prefiero no decirlo', code: 'X'},
    ]
  }
  
  async guardarDatos(){
    this.servicioDatos.agregarDatos(this.datos.uid, this.datos.altura, this.datos.sexo, this.datos.edad, this.datos.peso)
    .then(res =>{
      //console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error =>',error)
    })
  }

  //Editar datos -> se llama al boton para el pop up
  editarDatos(datosSeleccionado:DatoUsuarios) {
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

    this.servicioDatos.modificarDatos(this.datosSeleccionado.uid, datos)
    .then(datos => {
      alert ("Los datos fueron modificados con exito")
    })
    .catch (error => {
      alert ("No se pudieron modificar los datos")
    })
    
  /*
  Esta funcion toma los valores asignados de la colección de usuarios, y los modifica, excepto el valor ID.
  En caso de hacerlo bien, se muestra el primer mensaje, en caso contrario, muestra el segundo mensaje
  */
  }
};


