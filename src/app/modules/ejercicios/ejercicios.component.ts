import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EjerciciosService } from 'src/app/services/ejercicios.service';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
  providers:[MessageService, ConfirmationService]
})
export class EjerciciosComponent {
  constructor(private ejerciciosService: EjerciciosService, private messageService: MessageService, private confirmationService: ConfirmationService){}
  
}
