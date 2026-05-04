// src/app/models/ticket.model.ts
export interface FlightTicket {
  f_id: string;
  airline: string;
  flightNumber: string;
  fromCode: string;
  fromCity: string;
  toCode: string;
  toCity: string;
  departureTime: string;
  arrivalTime: string;
  gate: string;
  seat: string;
  class: 'Economy' | 'Business' | 'First';
}