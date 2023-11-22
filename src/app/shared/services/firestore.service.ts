  import { Injectable } from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
  import { Usuario } from 'src/app/model/usuarios';


  @Injectable({
    providedIn: 'root'
  })
  export class FirestoreService {
    private usuariosColletion: AngularFirestoreCollection<Usuario>
    //dentro de los parametros de la BD
    constructor(private database: AngularFirestore) {
    //referenciamos colección de la BD
      this.usuariosColletion = this.database.collection<Usuario>('usuarios');
    }

    agregarDatos(id:string,edad:number,sexo:number ,altura:number, peso:number){
      //RESOLVE: promesa resulta -> similar al then
      //REJECT: promesa rechazada -> similar al catch
      return new Promise(async(resolve,reject) =>{
        try {
          
          const resultado = await this.usuariosColletion.doc(id).update({
            edad: edad,
            sexo: '',
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

