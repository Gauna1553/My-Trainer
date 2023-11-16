import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { Ejercicio } from 'src/app/model/ejercicios';
import { Rutina } from 'src/app/model/rutinas';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { RutinasService } from 'src/app/services/rutinas.service';

@Component({
  selector: 'app-crearrutinas',
  templateUrl: './crearrutinas.component.html',
  styleUrls: ['./crearrutinas.component.css']
})
export class CrearrutinasComponent {

  idEditar = '';
  rParaEditar!: Rutina;
  editar!: boolean;
  ejerSubmitted = false;
  submitted = false;
  ejerciciosDialog = false;
  selectedEjer: Ejercicio[] = [];
  ejerciciosColeccion: Ejercicio[] = [];

  constructor(public servicioRutinas: RutinasService, public servicioEjercicios: EjerciciosService, private router: Router) {}

  ngOnInit() {
    this.servicioRutinas.obtenerRutinaParaEditar().subscribe(rutinaRecibida =>{
      this.rParaEditar = rutinaRecibida;
      console.log(this.rParaEditar)
      if(this.rParaEditar != undefined){
        this.editar = true;
      }
    })

    this.servicioEjercicios.obtenerEjercicio().subscribe(ejercicios => {
      this.ejerciciosColeccion = ejercicios
    })
  }
  ngDoCheck(){
    if(this.selectedEjer.length > 0){
      this.ejerSubmitted = true
    }
  }

  rutina: Rutina = {
    idRutina: '',
    nombre: '',
    ejercicios: []
  }

  openNew() {
    this.ejerciciosDialog = true
  }
  // FUNCION QUE SE EJECUTA AL TOCAR EL BOTON DE CREAR RUTINA
  // ESTA HECHA PARA QUE SOLO SE EJECUTE CORRECTAMENTE AL COMPLETAR LOS CAMPOS
  agregarRutina() {
    this.submitted = true;
    if (this.rutina.nombre && this.selectedEjer.length > 0) {
      this.ejerSubmitted = true;
      this.rutina.ejercicios = this.selectedEjer;
      const resultado = this.servicioRutinas.crearRutina(this.rutina).then((resp) => {
        alert('Se creo la rutina con exito')
      }).catch((error) => {
        alert('No se pudo crear la rutina')
      })
    }else{
      this.ejerSubmitted = false;
    }
  }

  editarRutina(){
    if(confirm ('¿Desea editar la rutina?') === true){
      this.idEditar = this.rParaEditar.idRutina;
      this.submitted = true;
      if(this.rutina.nombre && this.selectedEjer.length > 0){
        this.ejerSubmitted = true;
        this.rutina.idRutina = this.idEditar;
        this.servicioRutinas.modificarRutina(this.idEditar, this.rutina).then((resul)=>{
          
        })
      }
    }
  }

  volver(){
    this.servicioRutinas.terminarSubject();
    this.router.navigate(['/rutinas'])
  }
  cerrarDialog(){
    this.ejerciciosDialog = false
  }
}