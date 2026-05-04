import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Authservice } from '../AuthService/authservice';



export interface SearchCriteria {
  destination: string;
  people?: number; // Added this
  rooms?: number;  // Added this
  start?: string;
  end?: string;
}

@Injectable({
  providedIn: 'root',
})

export class Hotelservice {

  private router = inject(Router);
  private authservice = inject(Authservice);
  private loggedInUser!:any;




 

  // 1. Mock Data (Moved to a private constant-like array for cleaner service)
  private readonly hotels = [
    {
      HotelID: 1, Name: 'Grand Plaza', Location: 'New York', PricePerNight: 20000, Rating: 4.5,
      ImageUrl: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=1000&auto=format&fit=crop&q=60',
      Amenities: ['Free WiFi', 'Swimming Pool', 'Gym'],
      Rooms: [{ type: 'Standard Non-AC', price: 15000, available: true },{ type: 'Deluxe AC', price: 20000, available: true }]
    },
    {
      HotelID: 2, Name: 'Ocean View', Location: 'Vice City', PricePerNight: 20330, Rating: 3.5,
      ImageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop',
      Amenities: ['Free WiFi', 'Private Sauna'],
      Rooms: [{ type: 'Deluxe AC', price: 20000, available: true },{ type: 'Standard Non-AC', price: 15000, available: true }]
    }
    // ... add others as needed
  ];



  private searchCriteria = new BehaviorSubject<SearchCriteria | null>(null);
  currentSearch$ = this.searchCriteria.asObservable();

  updateSearch(criteria: SearchCriteria): void {
    this.searchCriteria.next(criteria);
  }

  getHotels(location: string): Observable<any[]> {
    const loc = location.toLowerCase();
    const filtered = this.hotels.filter(h => h.Location.toLowerCase().includes(loc) || !loc);
    return of(filtered).pipe(delay(500));
  }




  createBooking(bookingDetails: any): Observable<any> {
    return of({ success: true, message: 'Booking Successful!' }).pipe(delay(800));
  }
  
}
