import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Tokenservice } from '../services/tokenService/tokenservice';

export const hotelManagerGuard: CanMatchFn = (route, segments) => {
  const tokenService=inject(Tokenservice);
  const token = localStorage.getItem('WeTourjwt_token');

  if(token){
    const decodedtoken = tokenService.tokenDecode(token);
    if(decodedtoken.user.role==='HOTEL_MANAGER'){
      return true;
    }
  }

  return false;
};
