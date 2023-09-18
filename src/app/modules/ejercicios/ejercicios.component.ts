import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Ejercicio } from 'src/app/model/ejercicios';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
  providers:[MessageService, ConfirmationService]
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

  constructor(){}

  openNew() {
    this.submitted = false;
    this.ejerciciosDialog = true;
  }
  hideDialog(){
    this.ejerciciosDialog = false;
  }

  async registrarEjercicio(){
    const ejercicios = {
      nombre: this.ejercicios.nombre,
      grupomuscular: this.ejercicios.grupomuscular,
      rangorep: this.ejercicios.rangorep
    }
  }

}