import { Routes } from "@angular/router";


export const HOTEL_MANAGER_ROUTES:Routes=[
    {path:'',redirectTo:'hotelManager',pathMatch:'full'},
    {path:'hotelManager',loadComponent:()=>import('./hotel-man-dashboard/hotel-man-dashboard').then(r=>r.HotelManDashboard),children:[

        {path:'',redirectTo:'stats',pathMatch:'full'},
        {path:'stats',loadComponent:()=>import('./stats/stats').then(r=>r.Stats)},
        {path:'profile',loadComponent:()=>import('../Traveller/profile/profile').then(r=>r.Profile)},
        {path:'bookings',loadComponent:()=>import('./hotel-bookings/hotel-bookings').then(r=>r.HotelBookings)},
        {path:'transactions',loadComponent:()=>import('./transactions/transactions').then(r=>r.Transactions)},
        {path:'guests',loadComponent:()=>import('./hotel-guest-list/hotel-guest-list').then(r=>r.HotelGuestList)},
        {path:'rooms',loadComponent:()=>import('./hotelrooms/hotelrooms').then(r=>r.Hotelrooms)},

    ]},
   
]