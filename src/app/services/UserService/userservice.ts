import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

  API_URL:string="http://localhost:8000/user";
  http=inject(HttpClient);


  isExistsEmail(email:string):Observable<{isExists:boolean}>{

    return this.http.get<{isExists:boolean}>(`${this.API_URL}/validateEmail/${email}`);

  }
  
}
