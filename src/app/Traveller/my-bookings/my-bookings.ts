import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelBooking } from '../../../Models/hotelBooking';

@Component({
  selector: 'app-my-bookings',
  imports: [CommonModule,FormsModule],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.css',
})
export class MyBookings {

  allBookings = signal<HotelBooking[]>([
    { h_id: 'WT-9921', hotelName: 'Grand Hyatt', guestName: 'Sam Raymond', roomType: 'Deluxe Suite', checkIn: '2026-06-12', checkOut: '2026-06-15', status: 'Confirmed', price: 450, image: 'hotel1.jpg' },
    { h_id: 'WT-8842', hotelName: 'Ocean Breeze Resort', guestName: 'Sam Raymond', roomType: 'Sea View', checkIn: '2026-07-01', checkOut: '2026-07-05', status: 'Pending', price: 320, image: 'hotel2.jpg' },
    { h_id: 'WT-1120', hotelName: 'Mountain Lodge', guestName: 'Sam Raymond', roomType: 'Cabin', checkIn: '2026-01-10', checkOut: '2026-01-12', status: 'Past', price: 210, image: 'hotel3.jpg' },
    { h_id: 'WT-4431', hotelName: 'City Center Inn', guestName: 'Sam Raymond', roomType: 'Standard', checkIn: '2026-03-05', checkOut: '2026-03-07', status: 'Cancelled', price: 150, image: 'hotel4.jpg' }
  ]);

  // UI State
  filterStatus = signal<string>('All');
  searchQuery = signal<string>('');

  // Computed signal for filtered bookings
  filteredBookings = computed(() => {
    return this.allBookings().filter(b => {
      const matchesStatus = this.filterStatus() === 'All' || b.status === this.filterStatus();
      const matchesSearch = b.hotelName.toLowerCase().includes(this.searchQuery().toLowerCase()) || 
                            b.h_id.toLowerCase().includes(this.searchQuery().toLowerCase());
      return matchesStatus && matchesSearch;
    });
  });

  updateFilter(status: string) {
    this.filterStatus.set(status);
  }

}
