import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Tokenservice } from '../services/tokenService/tokenservice';

export const adminGuard: CanMatchFn = (route, segments) => {
  const tokenService=inject(Tokenservice);
  const token = localStorage.getItem('WeTourjwt_token');
  
  if(token){
    const decodedtoken = tokenService.tokenDecode(token);
    
    if(decodedtoken.user.role==='ADMIN'){
      return true;
    }
  }
  return false;
};
