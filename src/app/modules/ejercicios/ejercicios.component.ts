import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Ejercicio } from 'src/app/model/ejercicios';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
  providers:[MessageService, ConfirmationService]
})
export class EjerciciosComponent {

  modal: boolean = true;

  ejercicios: Ejercicio = {
    nombre: '',
    grupomuscular: '',
    rangorep: ''
  }  
  submitted: any;

  constructor(public ejerciciosService: EjerciciosService, public messageService: MessageService, public confirmationService: ConfirmationService){}

  async registrarEjercicio(){
    const ejercicios = {
      nombre: this.ejercicios.nombre,
      grupomuscular: this.ejercicios.grupomuscular,
      rangorep: this.ejercicios.rangorep
    }
  }

}