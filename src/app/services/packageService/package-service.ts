import { Injectable, signal } from '@angular/core';


export class TravelPackage {
  packageID: number = 0;
  name: string = '';
  includedHotels: string = '';
  includedFlights: string = '';
  activities: string = '';
  price: number = 0;
  startDate: string = '';    
  arrivalDate: string = ''; 
  days: number = 1;         
  nights: number = 0;  
  imageUrl: string = '';   
   

  constructor(init?: Partial<TravelPackage>) {
    Object.assign(this, init);
  }
}


@Injectable({
  providedIn: 'root',
})
export class PackageService {

  packages = signal<TravelPackage[]>([
  {
    packageID: 1,
    name: "Romantic Paris Getaway",
    includedHotels: "Hotel Le Meurice",
    includedFlights: "Air France round trip",
    activities: "Eiffel Tower tour, Seine River cruise, Louvre Museum visit",
    price: 2500,
    startDate: "2026-05-10",
    arrivalDate: "2026-05-17",
    days: 7,
    nights: 6,
    imageUrl: "https://example.com/images/paris.jpg"
  },
  {
    packageID: 2,
    name: "Adventure in Bali",
    includedHotels: "Bali Beach Resort",
    includedFlights: "Singapore Airlines round trip",
    activities: "Surfing lessons, Ubud jungle trek, Temple visits",
    price: 1800,
    startDate: "2026-06-01",
    arrivalDate: "2026-06-08",
    days: 8,
    nights: 7,
    imageUrl: "https://example.com/images/bali.jpg"
  }
]);
  isAdmin = signal(false);

 addPackage(pkg: TravelPackage) {
    // Ensure the new package has a unique ID based on the current list length
    const newPkg = { ...pkg, packageID: this.packages().length + 1 }; 
    this.packages.update(prev => [...prev, newPkg]);
  }

  updatePackage(updatedPkg: TravelPackage) {
    this.packages.update(prev => 
      prev.map(p => p.packageID === updatedPkg.packageID ? updatedPkg : p)
    );
  }

  deletePackage(id: number) {
    this.packages.update(prev => prev.filter(p => p.packageID !== id));
  }
  
}
