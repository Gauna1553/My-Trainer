import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'



@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private usuariosColeccion: AngularFirestoreCollection<Usuario>
  //dentro de los parametros de la BD
  constructor(private database: AngularFirestore) {
  //referenciamos colección de la BD
    this.usuariosColeccion = this.database.collection<Usuario>('usuarios');
  }


agregarDatos(id:string,edad:number,sexo:number ,altura:number, peso:number){
  //RESOLVE: promesa resulta -> similar al then
  //REJECT: promesa rechazada -> similar al catch
  return new Promise(async(resolve,reject) =>{
    try {
      
      const resultado = await this.usuariosColeccion.doc(id).update({
        edad: edad,
        sexo: 0,
        altura: altura,
        peso: peso
      })
      //muestra el resultado sin problema
      resolve(resultado);
    } catch(error) {
      //en caso de que ocurra un error
      reject(error)
    }
  })
}

}
