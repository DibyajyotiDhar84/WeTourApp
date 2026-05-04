import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-hotels',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-hotels.html',
  styleUrl: './admin-hotels.css',
})
export class AdminHotels {

  hotels = [
    { id: 'HTL-001', name: 'Grand Hyatt Dubai', owner: 'Sheikh Mohammed', address: 'Sheikh Rashid Rd, Dubai, UAE', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400', rating: 4.8, price: 250, status: 'Active' },
    { id: 'HTL-002', name: 'Marriott Paris Opera', owner: 'Jean Dupont', address: '12 Blvd Haussmann, Paris, France', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400', rating: 4.5, price: 320, status: 'Active' },
    { id: 'HTL-003', name: 'The Taj Palace', owner: 'Ratan Tata', address: '2 Sardar Patel Marg, New Delhi, India', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400', rating: 4.9, price: 210, status: 'Under Maintenance' },
  ];

  filteredHotels = [...this.hotels];
  searchQuery: string = '';

  ngOnInit() {}

  onSearch() {
    this.filteredHotels = this.hotels.filter(hotel => 
      hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      hotel.address.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      hotel.owner.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  editHotel(hotel: any) {
    console.log('Editing:', hotel.name);
  }

  deleteHotel(id: string) {
    this.hotels = this.hotels.filter(h => h.id !== id);
    this.onSearch();
  }

}
