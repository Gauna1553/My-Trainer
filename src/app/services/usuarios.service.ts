import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable()
export class UsuariosService {
    private usuariosColeccion: AngularFirestoreCollection<Usuario>

constructor(private database: AngularFirestore) {
    this.usuariosColeccion = database.collection('usuarios')
}

}
