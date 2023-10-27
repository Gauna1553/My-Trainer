import { CanActivateFn } from '@angular/router';

export const canEditGuard: CanActivateFn = (route, state) => {
  return true;
};
