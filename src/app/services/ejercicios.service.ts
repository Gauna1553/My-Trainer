import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Ejercicio } from 'src/app/model/ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  public ejerciciosColeccion: AngularFirestoreCollection<Ejercicio>

  constructor(private database: AngularFirestore) {
    this.ejerciciosColeccion = database.collection('ejecicios');
  }

  //funcion para crear un ejercicio nuevo
  crearEjercicio(ejercicio: Ejercicio) {
    return new Promise(async(resolve,reject) => {
      try{
        const id = this.database.createId();
        ejercicio.idEjercicio = id;

        const resultado = await this.ejerciciosColeccion.doc(id).set(ejercicio)

        resolve(resultado)
      } catch (error) {
        reject(error);
      }
    })

    /*
      Esta función genera una nueva promesa asincrona en la cual se le asigna un ID al objeto ejercicio.
    */

      //async, es decir que se ejecuta de manera desfazada a nuestra petición
  }


  obtenerEjercicio() {
    // snapshoot -> captura los cambios
    // pipe -> tuberia por donde viajan esos nuevos datos
    // map -> recorre esos datos y luego los lee
    return  this.ejerciciosColeccion.snapshotChanges().pipe(map((action => action.map(a => a.payload.doc.data()))))

    /*
      Esta función se encarga de llamar a los datos que se le solicitan, y mostrarlos en pantalla
    */
  }

  //funcion para editar los ejercicios
  /*Enviamos el id del ejercicio seleccionado y su nueva información*/
  modificarEjercicio(idEjercicio: string, nuevaData: Ejercicio) {
    return this.ejerciciosColeccion.doc(idEjercicio).update(nuevaData);
    /*
      Esta función se encarga de llamar al objeto ejercicios, y modificar un valor ya existente
    */
  }

  //funcion para Eliminar Ejercicios
  eliminarEjercicios(idEjercicio: string) {
    return new Promise((resolve, reject) => {
      try {
        const resp = this.ejerciciosColeccion.doc(idEjercicio).delete();
        resolve(resp); //nos notifica que se elimino un producto
      }
      catch (error) {
        reject(error)  //devuelve el error
      }
    })
  }
  /*
    Esta función es la encargada de eliminar un objeto por medio de su ID, la cual se llama directamente de la BD
  */
}
