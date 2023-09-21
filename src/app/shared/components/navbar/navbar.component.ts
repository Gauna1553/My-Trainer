import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    declare items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Inicio',
              icon: 'pi pi-fw pi-file',
              routerLink:"/",
              //items: []
          },
          {
              label: 'Ejercicios',
              icon: 'pi pi-fw pi-pencil',
              routerLink:"/ejercicios"
              //items: []
          },
          /*{
              label: 'Crear Rutina',
              icon: 'pi pi-fw pi-user',
              routerLink:"/crear",
              //items: []
          },*/
          {
              label: 'Rutinas',
              icon: 'pi pi-fw pi-calendar',
              routerLink:"/rutinas",
              items: [
                  {
                      label: 'Pecho',
                      icon: 'pi pi-fw pi-pencil',
                      /*items: [
                          {
                              label: 'Save',
                              icon: 'pi pi-fw pi-calendar-plus'
                          },
                          {
                              label: 'Delete',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]*/
                  },
                  {
                      label: 'Espalda',
                      icon: 'pi pi-fw pi-calendar-times',
                      /*items: [
                          {
                              label: 'Remove',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]*/
                  }
              ]
          },
           {
               label: 'Perfil',
               icon: 'pi pi-fw pi-power-off',
               routerLink:"/perfil"
           }
      ];
  }
}

