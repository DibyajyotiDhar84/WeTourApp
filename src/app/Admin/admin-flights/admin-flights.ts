import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-flights',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-flights.html',
  styleUrl: './admin-flights.css',
})
export class AdminFlights {
  allFlights = [
    { id: 'FL-701', airline: 'Emirates', number: 'EK-201', origin: 'DXB', destination: 'LHR', departure: '10:30 AM', landing: '02:45 PM', status: 'Flying', gate: 'A12' },
    { id: 'FL-702', airline: 'Qatar Airways', number: 'QR-15', origin: 'DOH', destination: 'JFK', departure: '08:15 AM', landing: '03:20 PM', status: 'On Time', gate: 'B05' },
    { id: 'FL-703', airline: 'Air India', number: 'AI-101', origin: 'DEL', destination: 'SFO', departure: '02:00 AM', landing: '06:30 AM', status: 'Landed', gate: 'G1' },
    { id: 'FL-704', airline: 'Lufthansa', number: 'LH-400', origin: 'FRA', destination: 'SIN', departure: '11:50 PM', landing: '04:10 PM', status: 'Cancelled', gate: 'C10' },
    { id: 'FL-705', airline: 'Delta', number: 'DL-42', origin: 'ATL', destination: 'CDG', departure: '05:40 PM', landing: '08:20 AM', status: 'Delayed', gate: 'E02' }
  ];

  filteredFlights = [...this.allFlights];
  filterStatus = 'All';

  applyFilter(status: string) {
    this.filterStatus = status;
    this.filteredFlights = status === 'All' 
      ? [...this.allFlights] 
      : this.allFlights.filter(f => f.status === status);
  }

  cancelFlight(id: string) {
    const flight = this.allFlights.find(f => f.id === id);
    if (flight) flight.status = 'Cancelled';
  }

}
