import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  declare items: MenuItem[];
  

  ngOnInit() {
    this.items = [
      {
        label: 'Conceptos e Informacion',
        icon: 'pi pi-fw pi-file',
        routerLink:"/conceps",
    
    },
    {
        label: 'Contactos',
        icon: 'pi pi-fw pi-pencil',
        routerLink:"/ejercicios"
      
    },
    {
        label: 'Creadores',
        icon: 'pi pi-fw pi-user',
        routerLink:"/crear"
    },
    

  ];
}
}

