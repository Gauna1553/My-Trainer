import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../auth/services/auth.service'; // Asume que tienes un servicio de autenticación

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.token.pipe(
      map(token => {
        if (!token) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    )
  }
}
