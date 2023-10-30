import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-calculadora-cal',
  templateUrl: './calculadora-cal.component.html',
  styleUrls: ['./calculadora-cal.component.css']
})

export class CalculadoraCALComponent {

  constructor ( public servicioFirestore: FirestoreService) {
  }

  datos: Usuario={
    sexo: 0,
    altura: 0,
    peso: 0,
    edad: 0,
    uid: undefined,
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    contrasena: ''
  }

  
  async guardarDatos(){
    this.servicioFirestore.agregarDatos(this.datos.uid, this.datos.altura,this.datos.edad,this.datos.peso,this.datos.sexo)
    .then(res =>{
      //console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error =>',error)
    })
   
  }

  async editarDatos(){
    let datos:Usuario= {
    sexo: this.datos.sexo!,
    altura: this.datos.altura!,
    peso: this.datos.peso!,
    edad: this.datos.edad!,
    uid: this.datos.uid,
    nombre:'',
    apellido: '',
    email: '',
    rol: '',
    contrasena: ''
  }
    this.servicioFirestore.modificardatos(this.datos.uid, this.datos.edad, this.datos.sexo , this.datos.altura, this.datos.peso)
    .then(datos => {
      alert("Sus datos se modificaron con exito.");
    })
    .catch(error => {
      alert("No se pudieron modificar sus datos :( \n"+error);
    })
  }
};


