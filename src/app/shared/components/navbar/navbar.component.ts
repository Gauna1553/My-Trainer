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
              icon: 'pi pi-home',
              routerLink:"/",
              /*items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {
                              label: 'Bookmark',
                              icon: 'pi pi-fw pi-bookmark'
                          },
                          {
                              label: 'Video',
                              icon: 'pi pi-fw pi-video'
                          }
                      ]
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-trash'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-fw pi-external-link'
                  }
              ]*/
          },
          {
              label: 'Ejercicios',
              icon: 'pi pi-fw pi-pencil',
              routerLink:"/ejercicios"
              /*items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]*/
          },
          {
              label: 'Crear Rutina',
              icon: 'pi pi-fw pi-user',
              routerLink:"/crear"
              /*items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-fw pi-users',
                      items: [
                          {
                              label: 'Filter',
                              icon: 'pi pi-fw pi-filter',
                              items: [
                                  {
                                      label: 'Print',
                                      icon: 'pi pi-fw pi-print'
                                  }
                              ]
                          },
                          {
                              icon: 'pi pi-fw pi-bars',
                              label: 'List'
                          }
                      ]
                  }
              ]*/
          },
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