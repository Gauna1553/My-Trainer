import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private datosColeccion: AngularFirestoreCollection<Usuario>
  //dentro de los parametros de la BD
  constructor(private database: AngularFirestore) {
  //referenciamos colección de la BD
    this.datosColeccion = this.database.collection<Usuario>('usuarios');
  }

agregarDatos(datos: Usuario){
  //RESOLVE: promesa resulta -> similar al then
  //REJECT: promesa rechazada -> similar al catch
  return new Promise(async(resolve,reject) =>{
    try {
      const id = this.database.createId();
      const resultado = await this.datosColeccion.doc(id).set(datos)
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
  return  this.datosColeccion.snapshotChanges().pipe(map((action => action.map(a => a.payload.doc.data()))))
  /*
    Esta función se encarga de llamar a los datos que se le solicitan, y mostrarlos en pantalla
  */
}

  //funcion para editar los datos ingresados por el usuario
  /*Enviamos el id del usuario seleccionado y su nueva información*/
  modificarDatos(uid: string, nuevaData: Usuario) {
    return this.database.collection('usuarios').doc(uid).update(nuevaData);
    /*
      Esta función se encarga de llamar al objeto usuario, y modificar un valor ya existente
    */
  }

  eliminarDatos(uid: string) {
    return new Promise ((resolve, reject) => {
      try {
        const resp = this.datosColeccion.doc(uid).delete()
        resolve (resp)
      } catch (error){
        reject (error)
      }
    })
  }




  calcularIMC(edad: number, sexo: string, altura: number, peso: number): number {
    if (sexo === 'hombre') {
       return 66.473 + (13.752 * peso) + (5.0033 * altura) - (6.755 * edad);
    } else if (sexo === 'mujer') {
       return 65.51 + (9.563 * peso) + (1.85 * altura) - (4.676 * edad);
    } else {
      throw new Error('Sexo inválido. Debe ser "hombre" o "mujer".');
    }
  }

  guardarIMC(uid:string, edad: number, sexo: string, altura: number, peso: number, imc:number) {
    imc = this.calcularIMC(edad, sexo, altura, peso);
  
    try {
      this.database.collection('usuarios').doc(uid).update({
        imc: imc,
        
      });
      console.log('IMC guardado con éxito');
    } catch (error) {
      error
    }
  }
}


