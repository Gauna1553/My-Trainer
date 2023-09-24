import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicios';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent {

  public rutinapecho!: Ejercicio[];
  public rutinaespalda!: Ejercicio[];
  public rutinapiernas!: Ejercicio[];

  constructor() {
    this.rutinapecho = [
      {
        nombre: 'Press de Banca',
        grupomuscular: 'Pecho',
        rangorep: '6-10'
      },
      {
        nombre: 'Press de Banca Inclinada',
        grupomuscular: 'Pecho',
        rangorep: '6-10'
      },
      {
        nombre: 'Pec Deck',
        grupomuscular: 'Pecho',
        rangorep: '8-12'
      }
    ];
    this.rutinaespalda = [
      {
        nombre:'Pull Over',
        grupomuscular: "Espalda",
        rangorep:"6-10"
      },{
        nombre: 'Jalon al pecho',
        grupomuscular: 'Espalda',
        rangorep: '8-12'
      },{
        nombre: 'Remo Gironda',
        grupomuscular: 'Espalda',
        rangorep: '6-8'
      }
    ];
    this.rutinapiernas = [
      {
        nombre: 'Leg Press',
        grupomuscular: 'Piernas',
        rangorep: '6-10'
      },{
        nombre: 'Sentadilla Hack',
        grupomuscular: 'Piernas',
        rangorep: '4-7'
      },{
        nombre: 'Peso muerto rumano',
        grupomuscular: 'Piernas',
        rangorep: '3-5'
      }
    ];
    
  }
}
