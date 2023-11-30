import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
=======
>>>>>>> b74fc261e456718d1f3e9a4577ee7322225e7154

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  visibilidadDialog = false;

<<<<<<< HEAD
  constructor(public servicioAuth: AuthService, public router: Router, private auth: AngularFireAuth) {}
  
=======
  constructor() { }
>>>>>>> b74fc261e456718d1f3e9a4577ee7322225e7154

  ngOnInit() { }

<<<<<<< HEAD
  ];
}
  //funcion par cerrar sesion
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res =>{
      alert ("se ha deslogeado correctamente");
      console.log(res);
      this.router.navigate(['/login'])
    })
}
=======
  open() {
    this.visibilidadDialog = true;
  }
>>>>>>> b74fc261e456718d1f3e9a4577ee7322225e7154
}

