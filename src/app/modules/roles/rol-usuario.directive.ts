import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';

@Directive({
  selector: '[appRolUsuario]'
})
export class RolUsuarioDirective {
  //private currentUser: RolUsuarioDirective;
  private permissions = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    //private user: Usuario
    ) {

  }

}
