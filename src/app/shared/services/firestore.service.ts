import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosColletion: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {
    this.usuariosColletion = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id: string){
    //RESOLVE: promesa resulta -> similar al then
    //REJECT: promesa rechazada -> similar al catch
    return new Promise(async(resolve,reject) =>{

      try {
        usuario.uid = id;

        const resultado = await this.usuariosColletion.doc(id).set(usuario);
        //muestra el resultado sin problema
        resolve(resultado);
      } catch(error) {
        //en caso de que ocurra un error
        reject(error)
      }
    })
  }
}