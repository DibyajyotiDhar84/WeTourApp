import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-tourpackages',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-tourpackages.html',
  styleUrl: './admin-tourpackages.css',
})
export class AdminTourpackages {

  packages = [
    { id: 'TP-901', title: 'Bali Spiritual Retreat', owner: 'Agoda Travels', sponsor: 'Garuda Indonesia', price: 1500, sales: 142, limit: 200, date: '2026-06-15', status: 'Selling Fast', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400' },
    { id: 'TP-902', title: 'Swiss Alps Explorer', owner: 'Alpine Pro', sponsor: 'Rolex', price: 4200, sales: 30, limit: 50, date: '2026-07-01', status: 'Upcoming', image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=400' },
    { id: 'TP-903', title: 'Tokyo Nightlife 2026', owner: 'J-Vibe Tours', sponsor: 'Sony', price: 2100, sales: 88, limit: 100, date: '2026-05-20', status: 'Sold Out', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400' }
  ];

  filteredPackages = [...this.packages];
  searchVal: string = '';

  onSearch() {
    this.filteredPackages = this.packages.filter(p => 
      p.title.toLowerCase().includes(this.searchVal.toLowerCase()) ||
      p.owner.toLowerCase().includes(this.searchVal.toLowerCase())
    );
  }

  getCompletionRate(sales: number, limit: number) {
    return (sales / limit) * 100;
  }

}
