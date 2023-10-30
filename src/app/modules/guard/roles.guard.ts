import { CanActivateFn } from '@angular/router';

export const rolesGuard: CanActivateFn = (route, state) => {
  return true;
};
