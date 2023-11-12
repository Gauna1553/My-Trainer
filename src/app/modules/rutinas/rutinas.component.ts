import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ejercicio } from 'src/app/model/ejercicios';
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
  
  editarRutina(rutina: Rutina){
    this.rutinaSeleccionada = rutina;
    this.router.navigate(['/crear'])
  }
}