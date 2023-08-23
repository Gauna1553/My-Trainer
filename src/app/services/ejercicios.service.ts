import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Ejercicio } from '../model/ejercicios';
import { collection, addDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  constructor(private firestore : Firestore) { }

  addEjercicio(ejercicio: Ejercicio){
    const ejercicioRef = collection(this.firestore, 'ejercicios');
    return addDoc(ejercicioRef, ejercicio);
  }


}
