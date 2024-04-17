import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const profileGuard: CanMatchFn = (route, segments) => {
  const router=inject(Router)
  if(localStorage.getItem("role")==="admin")
    {
      return true;
    }
    else
    {
      return false;
    }
};
