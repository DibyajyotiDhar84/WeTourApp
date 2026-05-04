import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

export interface FlightSearchCriteria {
  from?: string;
  destination: string;
  date?: string;
  people: number;
}

@Injectable({
  providedIn: 'root',
})
export class Flightservice {

  private searchCriteria = new BehaviorSubject<FlightSearchCriteria | null>(null);


  currentSearch$ = this.searchCriteria.asObservable();
  fdate=signal<any>('');


  private readonly flights = [
  { 
    FlightID: 'F1-22', 
    Airline: 'Akasa Air', 
    From: 'New Delhi', 
    To: 'Bangalore', 
    BasePrice: 6600, 
    Departure: '10:10 AM', 
    Arrival:'12:55 PM', 
    Duration: '2h 45m',
    Classes: [
      { name: 'Economy', bonus: 0, features: ['Standard Seat', '1 Free Meal'] },
      { name: 'Premium', bonus: 2500, features: ['Extra Legroom', 'Priority Boarding'] },
      { name: 'Business', bonus: 8000, features: ['Luxury Seat', 'Lounge Access', 'Free Drinks'] }
    ],
  },
  { 
    FlightID: 'JS-44', 
    Airline: 'Indigo', 
    From: 'Bagdogra', 
    To: 'Bangalore', 
    BasePrice: 8000, 
    Departure: '04:55 PM',
    Arrival:'07:55 PM',  
    Duration: '3h',
    Classes: [
      { name: 'Economy', bonus: 0, features: ['Standard Seat', '1 Free Meal'] },
      { name: 'Premium', bonus: 2500, features: ['Extra Legroom', 'Priority Boarding'] },
      { name: 'Business', bonus: 8000, features: ['Luxury Seat', 'Lounge Access', 'Free Drinks'] }
    ],
  }
];


  constructor() {}
  
  updateSearch(criteria: FlightSearchCriteria): void {
    console.log('Updating search store with:', criteria);
    this.searchCriteria.next(criteria);
  }

  getFlight(from: string, to: string, date: string): Observable<any[]> {
  const origin = from?.toLowerCase() || '';
  const dest = to?.toLowerCase() || '';

  const filtered = this.flights.filter(f => {
    const matchFrom = !origin || f.From.toLowerCase().includes(origin);
    const matchTo = !dest || f.To.toLowerCase().includes(dest);
    const matchDate = !date ||  this.fdate.set(date);

    return matchFrom && matchTo ;
  });

  return of(filtered).pipe(delay(400));
}

 
  getLatestSearchValue(): FlightSearchCriteria | null {
    return this.searchCriteria.getValue();
  }
  
}
