import { Component,DoCheck } from '@angular/core';
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

  ejerSubmitted = false
  submitted = false;
  ejerciciosDialog = false;
  selectedEjer: Ejercicio[] = [];
  ejerciciosColeccion: Ejercicio[] = [];

  constructor(public servicioRutinas: RutinasService, public servicioEjercicios: EjerciciosService) { }

  ngOnInit() {
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

  agregarRutina() {
    this.submitted = true
    if (this.rutina.nombre && this.selectedEjer.length > 0) {
      this.ejerSubmitted = true
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
}