import { Routes } from "@angular/router";


export const UserRoutes:Routes=[

    {path:'',loadChildren:()=>import('../Hotels/hotels.routes').then(r=>r.HOTEL_ROUTES)},
        {path:'flights',loadChildren:()=>import('../Flights/flights.routes').then(r=>r.FLIGHT_ROUTES)},
        {path:'tourPackages',loadChildren:()=>import('../TourPackages/tourPackages.routes').then(r=>r.TOUR_PACKAGES_ROUTES)},
]