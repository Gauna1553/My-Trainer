import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Ejercicios } from '../model/ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  constructor(private firestore : Firestore) { }

  addEjercicio(ejercicio: Ejercicios){}


}
