import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../../services/AuthService/authservice';

@Component({
  selector: 'app-tour-packages-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './tour-packages-form.html',
  styleUrl: './tour-packages-form.css',
})
export class TourPackagesForm {

   private router = inject(Router);
   private authService=inject(Authservice);

  // Signals for the three search criteria
  dest = signal('');
  startDate = signal('');
  duration = signal<number | null>(null);

  onSearch() {
    this.authService.currentUser.subscribe(res=>{
      if(res){
         this.router.navigate(['/landingDash/traveller/tourPackages/searchedtourPackages'], {
      queryParams: {
        dest: this.dest(),
        start: this.startDate(),
        nights: this.duration()
      }
    });

      }else{
        this.router.navigate(['/landingDash/tourPackages/searchedtourPackages'], {
      queryParams: {
        dest: this.dest(),
        start: this.startDate(),
        nights: this.duration()
      }
    });

      }
    });
  }

}
