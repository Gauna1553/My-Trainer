import { Component } from '@angular/core';
import { Conceps } from 'src/app/model/conceps';

@Component({
  selector: 'app-concepinf',
  templateUrl: './concepinf.component.html',
  styleUrls: ['./concepinf.component.css']
})
export class ConcepinfComponent {
 
  public info: Conceps[]

  constructor(){
    this.info=[{
      img:"../../../assets/volumen.jpg",
      nombre:"Volumen",
      definicion:"   Es la cantidad total de trabajo realizado, ya sea en una sesión de entrenamiento, o semana. Normalmente en el ejercicio de fuerza se suele anotar como repeticiones por número de serie. Por sesión, grupo muscular o por ejercicio."
    },
    {
      img:"../../../assets/intensidad.jpg",
      nombre:"Intensidad",
      definicion:"Es una medida subjetiva de la dificultad que la actividad física implica para cada uno, es decir, el esfuerzo que se realiza. El nivel de esfuerzo que percibes puede ser diferente al de otra persona realizando el mismo ejercicio."
    },
    {
      img:"../../../assets/sobrecarga.jpg",
      nombre:"Sobrecarga Progresiva",
      definicion:"Cuanto más avancemos en las sesiones, notaremos que cada vez realizaremos menos esfuerzo ya que nuestro cuerpo se acostumbra a las cargas que lo sometemos. Ahí es donde entra este concepto. Porque es una manera de ir progresando y mejorar el rendimiento, por ejemplo: Semana 1 (sentadilla): 4 series de 8 repeticiones con 40kg Semana 2: 4 series de 6 repeticiones con 45kg Semana 3: 4 series de 8 repeticiones con 45kg Aumentamos la intensidad (40kg🡪45kg) y reducimos el volumen (4S8R🡪4S6R), hasta que el cuerpo se acostumbre a la nueva carga y podamos aumentar el volumen, mejorando así el rendimiento. "
    }
  ]
  }
}
