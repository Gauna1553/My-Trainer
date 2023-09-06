import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Ejercicio } from '../model/ejercicios';
import { collection, addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  constructor(private moduloFire : Firestore) { }

  addEjercicio(ejercicio: Ejercicio){
    const ejercicioRef = collection(this.moduloFire, 'ejercicios');
    return addDoc(ejercicioRef, ejercicio);
  }

  getEjercicios(): Observable<Ejercicio[]>{
    const ejercicioRef = collection(this.moduloFire, 'ejercicios');
      return collectionData(ejercicioRef, { idField: 'id'}) as Observable<Ejercicio[]>;
  }
}
