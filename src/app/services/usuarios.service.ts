import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'

})
export class UsuariosService {
    private usuariosColeccion: AngularFirestoreCollection<Usuario>

constructor(private database: AngularFirestore) {
    this.usuariosColeccion = database.collection('usuarios');
}

crearUsuario(usuarios: Usuario) {
    return new Promise(async(resolve, reject) => {
        try {
            const id = this.database.createId();
            usuarios.uid = id;

            const resultado = await this.usuariosColeccion.doc(id).set(usuarios);
            
            resolve(resultado)
        } catch (error) {
            reject(error)
        }
    })
}

obtenerUsuario() {
    //El snapshot se encarga de capturar los cambios
    //El pipe seria el canal por donde pasan los datos
    //El map se encargaria de recorrer esos datos y leerlos
    return this.usuariosColeccion.snapshotChanges().pipe(map((action) => action.map((a) => a.payload.doc.data())));
    
    //Esta función se encarga de tomar los datos de los usuarios y mostrarlos.
}
    
    //Modificar usuarios
    modificarUsuarios(uid: string, nuevaData: Usuario) {
        return this.database.collection('usuarios').doc(uid).update(nuevaData);
        //Esta función de encarga de recolectar los datos ya existentes para luego modificar los que el administrador quiera
    }

    //Funcion para eliminar usuarios
    eliminarUsuarios(uid: string) {
        return new Promise((resolve, reject) => {
            try {
                const resp = this.usuariosColeccion.doc(uid).delete()
                resolve(resp)
            } catch (error) {
                reject(error)
            }
        })
    }
    //Esta función se encarga de tomar los datos del usuario almacenados en la BD, para luego eliminarlos de la misma.

}
