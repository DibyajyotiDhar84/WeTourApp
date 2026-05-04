import { Component, inject } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { Authservice } from '../services/AuthService/authservice';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule,RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  

  router=inject(Router);
  authservice=inject(Authservice);

  isLoggedIn():boolean{
    if(localStorage.getItem('WeTourjwt_token')){
      return true;
    }

    return false;
  }

  onLogout(){
    localStorage.removeItem('WeTourjwt_token');
    this.authservice.currentUser.next(null);
    this.router.navigateByUrl('');
  }

  getUrl(endpoint:string):string{
    if(localStorage.getItem('WeTourjwt_token')){
      return `/landingDash/traveller/${endpoint}`;
    }

    return `/landingDash/${endpoint}`;
  }

}
