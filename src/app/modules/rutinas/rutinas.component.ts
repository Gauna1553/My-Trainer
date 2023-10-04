import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicios';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent {
  // DEFINICION DE LAS PROPIEDADES DONDE VOY A GUARDAR LOS EJERCICIOS
  public rutinapecho: Ejercicio[];
  public rutinaespalda: Ejercicio[];
  public rutinapiernas: Ejercicio[];

  constructor() {
    // METO DENTRO DE UN ARREGLO CADA UNO DE LOS EJERCICIOS DE LA RUTINA DE PECHO
    this.rutinapecho = [
      {
        idEjercicio: '',
        nombre: 'Press de Banca',
        grupomuscular: 'Pecho',
        rangorep: '6-10'
      },
      {
        idEjercicio: '',

        nombre: 'Press de Banca Inclinada',
        grupomuscular: 'Pecho',
        rangorep: '6-10'
      },
      {
        idEjercicio: '',
        nombre: 'Pec Deck',
        grupomuscular: 'Pecho',
        rangorep: '8-12'
      }
    ];
    // METO DENTRO DE UN ARREGLO CADA UNO DE LOS EJERCICIOS DE LA RUTINA DE ESPALDA
    this.rutinaespalda = [
      {
        idEjercicio: '',
        nombre:'Pull Over',
        grupomuscular: "Espalda",
        rangorep:"6-10"
      },{
        idEjercicio: '',
        nombre: 'Jalon al pecho',
        grupomuscular: 'Espalda',
        rangorep: '8-12'
      },{
        idEjercicio: '',
        nombre: 'Remo Gironda',
        grupomuscular: 'Espalda',
        rangorep: '6-8'
      }
    ];
    // METO DENTRO DE UN ARREGLO CADA UNO DE LOS EJERCICIOS DE LA RUTINA DE PIERNAS
    this.rutinapiernas = [
      {
        idEjercicio: '',
        nombre: 'Leg Press',
        grupomuscular: 'Piernas',
        rangorep: '6-10'
      },{
        idEjercicio: '',
        nombre: 'Sentadilla Hack',
        grupomuscular: 'Piernas',
        rangorep: '4-7'
      },{
        idEjercicio: '',
        nombre: 'Peso muerto rumano',
        grupomuscular: 'Piernas',
        rangorep: '3-5'
      }
    ];
  }
}