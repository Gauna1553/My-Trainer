import { Component, OnInit } from '@angular/core';
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

  ejercicio: Ejercicio = {
    id: '',
    nombre: '',
    grupomuscular: '',
    rangorep: ''
  }  

  constructor(private ejerciciosService: EjerciciosService, private messageService: MessageService, private confirmationService: ConfirmationService){}
  
}