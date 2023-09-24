import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicios';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent {

  public rutinapecho!: Ejercicio[];

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
    ]
    
  }
}
