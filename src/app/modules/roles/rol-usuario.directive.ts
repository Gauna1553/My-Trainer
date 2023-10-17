import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRolUsuario]'
})
export class RolUsuarioDirective {

  constructor(private elementRef: ElementRef) { }

}
