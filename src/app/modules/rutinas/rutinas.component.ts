import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from 'src/app/model/rutinas';
import { RutinasService } from 'src/app/services/rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent {

  rutinaColeccion: Rutina[] = [];
  rutinasDialog = true;
  rutinaSeleccionada!: Rutina;

  constructor(public servicioRutinas: RutinasService, private router: Router) {}

  ngOnInit(){
    this.servicioRutinas.obtenerRutina().subscribe(rutinas =>{
      this.rutinaColeccion = rutinas;
    })
  }
  
  enviarRutina(rutina: Rutina){
    this.servicioRutinas.terminarSubject();
    this.servicioRutinas.actualizarRutinaParaEditar(rutina);
    this.router.navigate(['/crear']);
  }

  borrarRutina(rutinaSeleccionada: Rutina, event: Event){
    event.stopPropagation() //Esto hace que no se despliegue el fieldset
    this.rutinaSeleccionada = rutinaSeleccionada
    if(confirm('Desea eliminar la rutina') === true){ //Preguntamos si quiere borrar
      this.servicioRutinas.eliminarRutina(this.rutinaSeleccionada.idRutina) // Captura el id de la rutina seleccionada y la pasa como parametro
      .then(respuesta => { //En caso de que todo salga bien saltara este alert
        alert('La rutina se elimino correctamente');
      }).catch(error => { //En caso de que algo haya salido mal saltara este alert que muestra el error que hubo
        alert('No se pudo eliminar la rutina: \n'+error)
      })
    }else{
      alert('Se cancelo la eliminacion de la rutina');
    }
  }
  crearRutina(){
    this.servicioRutinas.terminarSubject();
    this.router.navigate(['/crear'])
  }
}