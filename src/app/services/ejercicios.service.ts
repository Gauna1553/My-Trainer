import { Injectable } from '@angular/core';
import { Ejercicio } from '../model/ejercicios';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  constructor() { }
  getEjercicios(){
    return [
      {
        nombre: '',
        grupomuscular: '',
        rangorep: ''
      }
    ]
  }
}
