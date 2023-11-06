import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicios';
import { Rutina } from 'src/app/model/rutinas';
import { RutinasService } from 'src/app/services/rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent {

  rutinaColeccion: Rutina[] = [];

  constructor(public servicioRutinas: RutinasService) {}
}