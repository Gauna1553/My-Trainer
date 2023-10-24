import { Component } from '@angular/core';
import { Datos } from 'src/app/model/datoscorp';

@Component({
  selector: 'app-calculadora-cal',
  templateUrl: './calculadora-cal.component.html',
  styleUrls: ['./calculadora-cal.component.css']
})
export class CalculadoraCALComponent {

  datos: Datos={
    sexo:0,
    altura:0,
    peso:0,
    edad:0,
  }

  
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      //console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error =>',error)
    })
    /*
      Esta función se encarga de guardar a los usuarios creados con la función de arriba, la BD.
      
      BD= Base de Datos
      
    */
  }
}
