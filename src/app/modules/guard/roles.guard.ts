import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service'; // Asume que tienes un servicio de autenticación

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRole = next.data['expectedRole']; // Obtiene el rol esperado de los datos de la ruta
    const currentUserRole = this.authService.RolesUsuarios(); // Obtén el rol actual del usuario

    if (currentUserRole === expectedRole) {
      return true; // Permite el acceso si el rol coincide
    } else {
      this.router.navigate(['/unauthorized']); // Redirige a una página de acceso no autorizado si el rol no coincide
      return false;
    }
  }
}
