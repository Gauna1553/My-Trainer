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
  visibilidadDialog = false;

  constructor(public servicioAuth: AuthService, public router: Router) { }


  ngOnInit() { }

  open() {
    this.visibilidadDialog = true;
  }

  //funcion par cerrar sesion
  async salir() {
    const res = await this.servicioAuth.cerrarSesion()
      .then(res => {
        this.servicioAuth.logout();
        location.reload()
        alert("se ha deslogeado correctamente");
      })
  }
}

