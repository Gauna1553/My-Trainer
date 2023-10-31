import { Component } from '@angular/core';
import { RutinasService } from 'src/app/services/rutinas.service';

@Component({
  selector: 'app-crearrutinas',
  templateUrl: './crearrutinas.component.html',
  styleUrls: ['./crearrutinas.component.css']
})
export class CrearrutinasComponent {
  visible = true;

  constructor(public servicioRutinas: RutinasService){}
}
