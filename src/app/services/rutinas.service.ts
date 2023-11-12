import { Injectable } from '@angular/core';
import { EjerciciosService } from './ejercicios.service';
import { Rutina } from '../model/rutinas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

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
        rutina.idRutina = id;

        const resultado = await this.rutinasColeccion.doc(id).set(rutina);

        resolve(resultado)
      }catch(error){
        reject(error)
      }
    })
  }

  obtenerRutina(){
    // snapshoot -> captura los cambios
    // pipe -> tuberia por donde viajan esos nuevos datos
    // map -> recorre esos datos y luego los lee
    return this.rutinasColeccion.snapshotChanges().pipe(map((action => action.map(a => a.payload.doc.data()))))
    // Esta funcion trae todas las rutinas desde firebase
  }

  modificarRutina(idRutina: string, nuevaDataRutina: Rutina){
    return this.rutinasColeccion.doc(idRutina).update(nuevaDataRutina);
  }

  //FUNCION PARA ELIMINAR LA RUTINA
  eliminarRutina(idRutina: string){
    return new Promise((resolve, reject)=>{
      try{
        const resp = this.rutinasColeccion.doc(idRutina).delete(); //Borra el documento de la rutina en base a su id
        resolve(resp); //Nos notifica que se elimino la rutina
      }catch(error){
        reject(error); //Nos notifica del error
      }
    })
  }
}
