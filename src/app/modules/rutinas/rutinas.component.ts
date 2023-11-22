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

  //Declaramos e inicializamos las propiedades que usamos en el componente
  rutinaColeccion: Rutina[] = [];
  rutinasDialog = true;
  rutinaSeleccionada!: Rutina;

  constructor(public servicioRutinas: RutinasService, private router: Router) {}

  ngOnInit(){
    //Obtenemos todas las rutinas desde FireBase
    this.servicioRutinas.obtenerRutina().subscribe(rutinas =>{
      this.rutinaColeccion = rutinas;
    })
  }
  
  //Envia la rutina que queremos editar al rutinas.service y te deriva a la pagina de editar
  enviarRutina(rutina: Rutina, event: Event){
    event.stopPropagation()
    this.servicioRutinas.terminarSubject();
    this.servicioRutinas.actualizarRutinaParaEditar(rutina);
    this.router.navigate(['/crear']);
  }

  // Manda al rutinas.service la rutina que deseamos eliminar, despues de confirmar que el usuario quiere borrarla
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
  // Borra el objeto que contenia a la rutina para editar y despues te deriva a la pagina de crear
  crearRutina(){
    this.servicioRutinas.terminarSubject();
    this.router.navigate(['/crear'])
  }
}