import { Component, computed, inject, signal } from '@angular/core';
import { PackageService, TravelPackage } from '../../services/packageService/package-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Authservice } from '../../services/AuthService/authservice';

@Component({
  selector: 'app-tour-packages-searched',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './tour-packages-searched.html',
  styleUrl: './tour-packages-searched.css',
})
export class TourPackagesSearched {
  public packageService = inject(PackageService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService=inject(Authservice);
  // Search signals to store criteria from the parent search page
  destTerm = signal('');
  hotelTerm = signal('');
  flightTerm = signal('');
  selectedPackage = signal<TravelPackage | null>(null);

  ngOnInit() {
    // Listen for query parameters from the search parent page
    this.route.queryParams.subscribe(params => {
      console.log(params);
      
      if (params['dest']) this.destTerm.set(params['dest']);
      if (params['start']) this.hotelTerm.set(params['start']);
      if (params['night']) this.flightTerm.set(params['night']);
    });
  }

  // Reactive filtering based on all three search inputs
  filteredPackages = computed(() => {
    const d = this.destTerm().toLowerCase();
    const h = this.hotelTerm().toLowerCase();
    const f = this.flightTerm().toLowerCase();


    return this.packageService.packages().filter(pkg => 
      pkg.name.toLowerCase().includes(d)
    );
  });


  getUrl(endpoint:string):string{
    let url=`/landingDash/tourPackages/${endpoint}`;
    this.authService.currentUser.subscribe(res=>{
      if(res){
        url=`/landingDash/traveller/tourPackages/${endpoint}`;
      }
      return url;
    });

    return url;

  }

  goToPayment(pkgId: number) {
    this.authService.currentUser.subscribe(res=>{
      if(res){
        this.router.navigate(['/landingDash/traveller/tourPackages/tourPackagesinfo', pkgId]);
      }
    })
    this.router.navigate(['/landingDash/tourPackages/tourPackagesinfo', pkgId]);
  }

}
