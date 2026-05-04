import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { Authservice } from '../../services/AuthService/authservice';

@Component({
  selector: 'app-hotel-man-dashboard',
  imports: [CommonModule,FormsModule,RouterModule,RouterLinkActive],
  templateUrl: './hotel-man-dashboard.html',
  styleUrl: './hotel-man-dashboard.css',
})
export class HotelManDashboard {
router=inject(Router);
authservice=inject(Authservice);

  onLogout() {
    console.log('User logged out');
    localStorage.removeItem('WeTourjwt_token'); 
    this.authservice.currentUser.next(null);
    this.router.navigateByUrl('');
}

}
