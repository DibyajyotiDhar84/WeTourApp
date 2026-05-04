import { Routes } from "@angular/router";


export const TRAVELLER_ROUTES:Routes=[

    {path:'',redirectTo:'traveller',pathMatch:'full'},
    {path:'traveller',loadComponent:()=>import('./traveller-dash/traveller-dash').then(r=>r.TravellerDash),children:[
        {path:'',loadChildren:()=>import('../Hotels/hotels.routes').then(r=>r.HOTEL_ROUTES)},
        {path:'flights',loadChildren:()=>import('../Flights/flights.routes').then(r=>r.FLIGHT_ROUTES)},
        {path:'tourPackages',loadChildren:()=>import('../TourPackages/tourPackages.routes').then(r=>r.TOUR_PACKAGES_ROUTES)},
        {path:'profile',loadComponent:()=>import('./profile/profile').then(r=>r.Profile)},
        {path:'myBookings',loadComponent:()=>import('./my-bookings/my-bookings').then(r=>r.MyBookings)},
        {path:'myTickets',loadComponent:()=>import('./my-tickets/my-tickets').then(r=>r.MyTickets)},
        {path:'myCoupons',loadComponent:()=>import('./my-coupons/my-coupons').then(r=>r.MyCoupons)},
        
    ]},
]