import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { Authservice } from '../../services/AuthService/authservice';

@Component({
  selector: 'app-tour-package-man-dashboard',
  imports: [CommonModule,FormsModule,RouterModule,RouterLinkActive],
  templateUrl: './tour-package-man-dashboard.html',
  styleUrl: './tour-package-man-dashboard.css',
})
export class TourPackageManDashboard {
  authservice=inject(Authservice);
  router=inject(Router);

  onLogout() {
    console.log('User logged out');
    localStorage.removeItem('WeTourjwt_token'); 
    this.authservice.currentUser.next(null);
    this.router.navigateByUrl('');
}

}
