import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicios';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
  providers: []
})
export class EjerciciosComponent implements OnInit {
  database = '';
  submitted = false;

  // Creo un arreglo para guardar la informacion que despues se recorre para armar la tabla
  ejerciciosColeccion: Ejercicio[] = [];

  ejercicioSeleccionado!: Ejercicio;

  editar = false;

  idEditar = "";

  //Defino la visibilidad del popup como falsa de forma default
  ejerciciosDialog: boolean = false;
  //Defino la visibilidad del loading
  loading = false;


  ejercicios!: Ejercicio

  constructor(public servicioEjercicios: EjerciciosService) { }

  ngOnInit() {
    /* llamamos función obtenerProducto y le enviamos los nuevos valores
    del formulario producto (se guardan en la colección) */
    this.servicioEjercicios.obtenerEjercicio().subscribe(ejercicios => {
      this.ejerciciosColeccion = ejercicios;

      //Es una coleccion para poder seleccionar a mas de un elemento
    })
  }

  ejercicioss: Ejercicio = {
    nombre: '',
    grupomuscular: '',
    rangorep: '',
    idEjercicio: '',
  }


  //Esta funcion abre el popup al hacer que su visibilidad sea verdadera
  openNew() {
    this.submitted = false;
    this.ejerciciosDialog = true;
  }
  //Esta funcion cierra el popup al hacer que su visibilidad sea falsa y resetea los inputs
  hideDialog() {
    this.ejerciciosDialog = false;
    this.ejercicioss.nombre = '';
    this.ejercicioss.grupomuscular = '';
    this.ejercicioss.rangorep = '';
  }

  crearEjercicio() {
    this.submitted = true
    if (!this.editar && this.ejercicioss.nombre && this.ejercicioss.grupomuscular && this.ejercicioss.rangorep) {
      this.loading = true
      const resultado = this.servicioEjercicios.crearEjercicio(this.ejercicioss).then((resp) => { //crea la colleción y almacena los datos 
        this.loading = false
        alert("Se creo correctamente el ejercicio") //si se pudo almancenar los datos, muestra este cartel
        this.ejerciciosDialog = false;
      }).catch((error) => {
        this.loading = false
        alert('No se pudo guardar el ejercicio')// si hubo algun error manda a llamar esta opcion
      })

    }
    else {
      if (this.ejercicioss.nombre && this.ejercicioss.grupomuscular && this.ejercicioss.rangorep) {
        this.loading = true
        this.ejercicioss.idEjercicio = this.idEditar;
        this.servicioEjercicios.modificarEjercicio(this.idEditar, this.ejercicioss).then((resul) => {
          this.loading = false
          this.editar = false;
          this.ejerciciosDialog = false;
        })
      }
    }

    /*
    Esta funcion lo que hace es crear ejercicios y almacenarlos en la base de datos de firebase.
    Los datos son almacenados en la constante resultado, y si se logro guardar correctamente, se muestra el primer mensaje.
    En caso de no haberse guardado, se almacena el error y se muestra el segundo mensaje.
    */
  }

  mostrarBorrar(ejercicioSeleccionado: Ejercicio) {
    this.ejercicioSeleccionado = ejercicioSeleccionado;
    if (confirm("Desea eliminar el ejercicio?") === true) {
      this.borrarEjercicio()
    } else {
      alert("No se borro el ejercicio")
    }

    /*
      Esta función lo que hace es a traves de un confirm, preguntarle al usuario si quiere eliminar un ejercicio.
      En caso que toque el boton de aceptar, llama a la función de borrarEjercicio(). En caso contrario, aparece el segundo cartel.
    */
  }


  borrarEjercicio() {
    this.servicioEjercicios.eliminarEjercicios(this.ejercicioSeleccionado.idEjercicio)
      .then(respuesta => {
        alert("el ejercicio se eliminio correctamente")
      })
      .catch(error => {
        alert("No se pudo eliminar el ejercicio: \n" + error)
      })

    /*
    Esta funcion se encargar de tomar la ID de los ejercicios almacenados en la BD, y por medio de un boton
    al cual se le asigna esta función, se borrara el ejercicio deseado.
    Si se pudo borrar correctamente, se muestra el primer mensaje, en caso contrario, se mostrara el segundo.
    */
  }

  //Editar producto -> se llama al boton para el pop up
  editarEjercicio(ejercicioSeleccionado: Ejercicio) {
    this.ejercicioSeleccionado = ejercicioSeleccionado;
    if (confirm("Desea editar el ejercicio?") === true) {
      this.editar = true;
      this.idEditar = ejercicioSeleccionado.idEjercicio;
      this.openNew();
    } else {
      alert("No se pudo modificar el ejercicio")
    }
    /*
      Esta función lo que hace es seguir el mismo ejemplo de mostrarBorrar().
      La principal diferencia es que ahora abre una ventana modal con los campos del ejercicio actuales, para así poder editarlos.
    */
  }
}