import { Routes } from "@angular/router";


export const ADMIN_ROUTES: Routes=[
    
    {path:'',redirectTo:'admin',pathMatch:'full'},

    {path:'admin',loadComponent:()=>import('./admin-dashboard/admin-dashboard').then(r=>r.AdminDashboard),
        children:[
            {path:'',redirectTo:'stats',pathMatch:'full'},
            {path:'stats',loadComponent:()=>import('./admin-stats/admin-stats').then(r=>r.AdminStats)},
            {path:'bookings',loadComponent:()=>import('./admin-bookings/admin-bookings').then(r=>r.AdminBookings)},
            {path:'flights',loadComponent:()=>import('./admin-flights/admin-flights').then(r=>r.AdminFlights)},
            {path:'hotels',loadComponent:()=>import('./admin-hotels/admin-hotels').then(r=>r.AdminHotels)},
            {path:'customers',loadComponent:()=>import('./admin-customer/admin-customer').then(r=>r.AdminCustomer)},
            {path:'transactions',loadComponent:()=>import('./admin-transactions/admin-transactions').then(r=>r.AdminTransactions)},
            {path:'tourpackages',loadComponent:()=>import('./admin-tourpackages/admin-tourpackages').then(r=>r.AdminTourpackages)},
            {path:'profile',loadComponent:()=>import('../Traveller/profile/profile').then(r=>r.Profile)},
        ]
    },
]