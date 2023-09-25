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
  // Creo un arreglo para guardar la informacion que despues se recorre para armar la tabla
  ejerciciosss! :Ejercicio[];

  constructor(public servicioEjercicios: EjerciciosService){}

  ngOnInit(){
    // Traigo toda la informacion de la tabla desde el ejerciciosservice
    this.servicioEjercicios.getEjercicio().then((data)=>{
      this.ejerciciosss = data;
    });
  }
  //Defino la visibilidad del popup como falsa de forma default
  ejerciciosDialog: boolean = false;

  ejercicios: Ejercicio = {
    nombre: '',
    grupomuscular: '',
    rangorep: ''
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
    this.ejercicios.nombre = '';
    this.ejercicios.grupomuscular = '';
    this.ejercicios.rangorep = '';
  }

}