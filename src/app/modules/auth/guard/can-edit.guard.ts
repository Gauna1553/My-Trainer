import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class canEditGuard implements CanActivateFn {
  constructor(private authSvc: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.usuario.pipe (
      take(1),
      map((usuario) => usuario && this.authSvc.isAdministrador(usuario)),
      tap(canEdit => {
        if(!canEdit) {
          window.alert('Acceso denegado. No tienes permiso de administradro')
        }
      })
    )
    }
}
