import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable()
export class UsuariosService {
    private usuariosColeccion: AngularFirestoreCollection<Usuario>

constructor(private database: AngularFirestore) {
    this.usuariosColeccion = database.collection('usuarios');
}

obtenerUsuario() {
    //El snapshot se encarga de capturar los cambios
    //El pipe seria el canal por donde pasan los datos
    //El map se encargaria de recorrer esos datos y leerlos
    return this.usuariosColeccion.snapshotChanges().pipe(map((action) => action.map((a) => a.payload.doc.data())));
    
    //Esta función se encarga de tomar los datos de los usuarios y mostrarlos.
}

    modificarUsuarios(uid: string, rol: string, nuevaData: string) {
        return this.database.collection('usuarios').doc(uid).update(nuevaData);
        //Esta función de encarga de recolectar los datos ya existentes para luego modificar los que el administrador quiera
    }

}
