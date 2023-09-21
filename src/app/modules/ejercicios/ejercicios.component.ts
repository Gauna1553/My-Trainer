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

  ngOnInit(): void {}

  ejerciciosDialog: boolean = false;

  ejercicios: Ejercicio = {
    nombre: '',
    grupomuscular: '',
    rangorep: ''
  }  
  submitted: any;

  constructor(public servicioEjercicios: EjerciciosService){}

  openNew() {
    this.submitted = false;
    this.ejerciciosDialog = true;
  }
  hideDialog(){
    this.ejerciciosDialog = false;
    this.ejercicios.nombre = '';
    this.ejercicios.grupomuscular = '';
    this.ejercicios.rangorep = '';
  }

}