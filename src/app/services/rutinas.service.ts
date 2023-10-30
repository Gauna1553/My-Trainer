import { Injectable } from '@angular/core';
import { EjerciciosService } from './ejercicios.service';
import { Rutina } from '../model/rutinas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {
  public rutinasColeccion: AngularFirestoreCollection<Rutina>
  constructor(private servicioEjercicios: EjerciciosService, private database: AngularFirestore) { 
    this.rutinasColeccion = database.collection('rutinas')
  }


  crearRutina(rutina: Rutina){
    return new Promise(async(resolve,reject)=>{
      try{
        const id = this.database.createId();
      }catch{

      }
    })
  }
}
