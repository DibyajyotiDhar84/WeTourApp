import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-bookings',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-bookings.html',
  styleUrl: './admin-bookings.css',
})
export class AdminBookings {

  allBookings = [
    { id: 'BK-101', user: 'Arjun Mehta', type: 'Flight', item: 'AI-302 (DEL-NYC)', date: '2026-05-12', amount: 1250, status: 'Confirmed' },
    { id: 'BK-102', user: 'Sarah J.', type: 'Hotel', item: 'Grand Hyatt Dubai', date: '2026-06-01', amount: 800, status: 'Pending' },
    { id: 'BK-103', user: 'Rahul Roy', type: 'Tour', item: 'Swiss Alps 7D/6N', date: '2026-07-20', amount: 3200, status: 'Confirmed' },
    { id: 'BK-104', user: 'Elena G.', type: 'Flight', item: 'EK-201 (LON-DXB)', date: '2026-05-15', amount: 950, status: 'Cancelled' },
    { id: 'BK-105', user: 'Michael B.', type: 'Hotel', item: 'Marriott Paris', date: '2026-05-25', amount: 1100, status: 'Confirmed' }
  ];

  filteredBookings = [...this.allBookings];
  searchTerm: string = '';
  selectedType: string = 'All';

  ngOnInit() {}

  applyFilters() {
    this.filteredBookings = this.allBookings.filter(booking => {
      const matchesSearch = booking.user.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                            booking.id.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'All' || booking.type === this.selectedType;
      return matchesSearch && matchesType;
    });
  }

  updateStatus(booking: any, newStatus: string) {
    booking.status = newStatus;
    // Logic to update backend would go here
  }

  deleteBooking(id: string) {
    this.allBookings = this.allBookings.filter(b => b.id !== id);
    this.applyFilters();
  }

}
