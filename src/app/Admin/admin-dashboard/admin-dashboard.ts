import { Component, inject } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { Authservice } from '../../services/AuthService/authservice';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterModule,RouterLinkActive],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

  router=inject(Router);
  private authService = inject(Authservice);

    onLogout(){
    localStorage.removeItem('WeTourjwt_token');
    this.authService.currentUser.next(null);
    this.router.navigateByUrl('');
  }

}
