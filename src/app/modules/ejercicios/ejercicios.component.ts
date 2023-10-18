import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicios';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
  providers:[]
})
export class EjerciciosComponent implements OnInit{
  database = '';

  // Creo un arreglo para guardar la informacion que despues se recorre para armar la tabla
  //ejerciciosss! :Ejercicio[];
  ejerciciosColeccion: Ejercicio [] = [];

  ejercicioSeleccionado!: Ejercicio;

  selectedCities: string[] = [];

  ejercicios!:Ejercicio

  constructor(public servicioEjercicios: EjerciciosService){}

  ngOnInit(){
    /* llamamos función obtenerProducto y le enviamos los nuevos valores
    del formulario producto (se guardan en la colección) */
    this.servicioEjercicios.obtenerEjercicio().subscribe(ejercicios => {
      this.ejerciciosColeccion = ejercicios;

      //Es una coleccion para poder seleccionar a mas de un elemento
    })
  }
  //Defino la visibilidad del popup como falsa de forma default
  ejerciciosDialog: boolean = false;
  //Defino la visibilidad del loading
  loading = false;


  ejercicioss: Ejercicio = {
    nombre: '',
    grupomuscular: '',
    rangorep: '',
    idEjercicio: '',
  }  
  // Todavia no usamos esto
  submitted: any;

  
  //Esta funcion abre el popup al hacer que su visibilidad sea verdadera
  openNew() {
    this.submitted = false;
    this.ejerciciosDialog = true;
  }
  //Esta funcion cierra el popup al hacer que su visibilidad sea falsa y resetea los inputs
  hideDialog(){
    this.ejerciciosDialog = false;
    this.ejercicioss.nombre = '';
    this.ejercicioss.grupomuscular = '';
    this.ejercicioss.rangorep = '';
  }

  crearEjercicio(){

    this.loading = true
    const resultado = this.servicioEjercicios.crearEjercicio(this.ejercicios).then((resp) => { //crea la colleción y almacena los datos 
      this.loading = false
      alert("Se creo correctamente el ejercicio") //si se pudo almancenar los datos, muestra este cartel
      this.ejerciciosDialog = false;
    }) .catch((error) => {
      this.loading = false
      alert('No se pudo guardar el ejercicio')// si hubo algun error manda a llamar esta opcion
    })
  }


  borrarEjercicio() {
    //console.log(this.ejercicioss)
    const eliminar = this.servicioEjercicios.eliminarEjercicios(this.ejercicios.idEjercicio)
    .then((resp) => {
      alert ("Se elimino con exito el ejercicio");
    }) .catch ((error) => {
      alert("No se pudo eliminar correctamente el ejercicio: (\n" + error)
    })
  }

  //Editar producto -> se llama al boton para el pop up
  editarEjercicio(ejercicioSeleccionado: Ejercicio) {
    this.ejercicioSeleccionado = ejercicioSeleccionado;
  }

  editEjercicio() {
    let datos: Ejercicio = {
      nombre: this.ejercicioSeleccionado.nombre,
      idEjercicio: this.ejercicioSeleccionado.idEjercicio,
      grupomuscular: this.ejercicioSeleccionado.grupomuscular,
      rangorep: this.ejercicioSeleccionado.rangorep
    }

    this.servicioEjercicios.modificarEjercicio(this.ejercicioSeleccionado.idEjercicio, datos)
    .then(ejercicios => {
      alert("El ejercicio se modifico con exito")
    })
    .catch(error => {
      alert ("no se pudo modificar el ejercicio: (\n" + error)
    })
  }



}
