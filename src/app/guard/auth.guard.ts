import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('rol') == 'estudiante'){
    return true
  }else{
    return false;
  }

}
export const authGuard2: CanActivateFn = (route, state) => {
  if(localStorage.getItem('rol2') == 'profesor'){
    return true
  }else{
    return false;
  }

}
export const authGuard3: CanActivateFn = (route, state) => {
  if(localStorage.getItem('rol3') == 'admin'){
    return true
  }else{
    return false;
  }

}

export const loginGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') == 'true'){
    return true
  }else{
    return false;
  }

};
