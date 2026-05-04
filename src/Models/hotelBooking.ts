// src/app/models/booking.model.ts
export interface HotelBooking {
  h_id: string;
  hotelName: string;
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled' | 'Past';
  price: number;
  image: string;
}