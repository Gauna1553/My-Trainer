import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  declare items: MenuItem[];

  constructor(public servicioAuth: AuthService, public router: Router) {}
  

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
  //funcion par cerrar sesion
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res =>{
      alert ("se ha deslogeado correctamente");
      console.log(res);
      this.router.navigate(['/inicio'])
    })
  }
}

