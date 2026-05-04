import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class Tokenservice {

  tokenDecode(token:string):any{
    try {
      return jwtDecode(token);
      
    } catch (error) {
      return null; 
    }
  }


  
}
