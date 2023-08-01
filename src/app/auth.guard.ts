import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
if(localStorage.getItem('token')!==null) {

  return true
}else{
  return false
}
return true;
};

