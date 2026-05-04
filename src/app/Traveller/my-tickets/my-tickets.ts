import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightTicket } from '../../../Models/flightTicket';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-my-tickets',
  imports: [CommonModule,FormsModule],
  templateUrl: './my-tickets.html',
  styleUrl: './my-tickets.css',
})
export class MyTickets {

  tickets = signal<FlightTicket[]>([
    {
      f_id: 'TK-552', airline: 'Skyline Airways', flightNumber: 'SA-102',
      fromCode: 'JFK', fromCity: 'New York', toCode: 'LHR', toCity: 'London',
      departureTime: '2026-06-20T10:30:00', arrivalTime: '2026-06-20T22:45:00',
      gate: 'B12', seat: '14A', class: 'Economy',
    },
    {
      f_id: 'TK-881', airline: 'Global Jet', flightNumber: 'GJ-443',
      fromCode: 'DXB', fromCity: 'Dubai', toCode: 'SIN', toCity: 'Singapore',
      departureTime: '2026-07-05T23:15:00', arrivalTime: '2026-07-06T11:00:00',
      gate: 'A7', seat: '02C', class: 'Business',
    }
  ]);

  searchQuery = signal('');

  filteredTickets = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.tickets().filter(t => 
      t.toCity.toLowerCase().includes(query) || 
      t.flightNumber.toLowerCase().includes(query)
    );
  });


}
