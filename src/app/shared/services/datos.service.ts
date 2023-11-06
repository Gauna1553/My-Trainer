import { Injectable } from '@angular/core';
import { DatoUsuarios, Usuario } from 'src/app/model/usuarios';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private usuariosColeccion: AngularFirestoreCollection<DatoUsuarios>
  //dentro de los parametros de la BD
  constructor(private database: AngularFirestore) {
  //referenciamos colección de la BD
    this.usuariosColeccion = this.database.collection<DatoUsuarios>('usuarios');
  }

agregarDatos(id:string,edad:number,sexo:string ,altura:number, peso:number){
  //RESOLVE: promesa resulta -> similar al then
  //REJECT: promesa rechazada -> similar al catch
  return new Promise(async(resolve,reject) =>{
    try {
      
      const resultado = await this.usuariosColeccion.doc(id).update({
        edad: edad,
        sexo: sexo,
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

obtenerDatos () {
  // snapshoot -> captura los cambios
  // pipe -> tuberia por donde viajan esos nuevos datos
  // map -> recorre esos datos y luego los lee
  return  this.usuariosColeccion.snapshotChanges().pipe(map((action => action.map(a => a.payload.doc.data()))))
  /*
    Esta función se encarga de llamar a los datos que se le solicitan, y mostrarlos en pantalla
  */
}

  //funcion para editar los datos ingresados por el usuario
  /*Enviamos el id del usuario seleccionado y su nueva información*/
  modificarDatos(uid: string, nuevaData: DatoUsuarios) {
    return this.database.collection('usuarios').doc(uid).update(nuevaData);
    /*
      Esta función se encarga de llamar al objeto usuario, y modificar un valor ya existente
    */
  }

  // calcularIMC() {
  //   const id = 'some-user-id';
  //   const edad = 25;
  //   const sexo = 'hombre';
  //   const altura = 175;
  //   const peso = 75;
   
   
  //   // Calcular y mostrar el IMC del usuario
  //   const imc = calcularIMC(edad, sexo, altura, peso);
  //   console.log(`El IMC del usuario es: ${imc}`);
  //  }

  guardarIMC(uid:string, edad:number, sexo:string, altura:number, peso:number) {
    const imc = calcularIMC(edad, sexo, altura, peso);
  
    try {
      await db.collection('usuarios').doc(id).set({
        imc: imc,
        fecha: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log('IMC guardado con éxito');
    } catch (error) {
      console.error('Error al guardar el IMC:', error);
    }
  }

}


