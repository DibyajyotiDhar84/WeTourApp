import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Tokenservice } from '../services/tokenService/tokenservice';

export const travellerGuard: CanMatchFn = (route, segments) => {
  
  const tokenservice= inject(Tokenservice);
  const token = localStorage.getItem('WeTourjwt_token');
  if(token){
    const decodedtoken = tokenservice.tokenDecode(token);
    if(decodedtoken.user.role==="TRAVELLER"){
      return true;
    }
  }

  return false;
};
