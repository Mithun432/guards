import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router= inject(Router)
  if(localStorage.getItem("user")==="user@gmail.com")
    {
  return true;
    }
    else{
      router.navigateByUrl("/login")
      return false;
    }  
};
