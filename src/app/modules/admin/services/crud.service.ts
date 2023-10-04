import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Ejercicio } from 'src/app/model/ejercicios';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private ejerciciosColeccion: AngularFirestoreCollection<Ejercicio>
  constructor(private database: AngularFirestore) {
    this.ejerciciosColeccion: database.collection('ejecicios')
  }
}
