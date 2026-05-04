import { Routes } from '@angular/router';
import { LandingDashboard } from './Dashboards/landing-dashboard/landing-dashboard';
import { Login } from './login/login';
import { adminGuard } from './guards/admin-guard';
import { hotelManagerGuard } from './guards/hotel-manager-guard';
import { packageManagerGuard } from './guards/package-manager-guard';
import { travellerGuard } from './guards/traveller-guard';

export const routes: Routes = [

    {path:'',redirectTo:'landingDash',pathMatch:'full'},
    {path:'login',component:Login},
    {path:'register',loadComponent:()=>import('./registerr/register/register').then(r=>r.Register)},

    {path:'landingDash',loadChildren:()=>import('./Admin/admin.routes').then(r=>r.ADMIN_ROUTES),canMatch:[adminGuard]},
    {path:'landingDash',loadChildren:()=>import('./HotelManager/hotelMan.routes').then(r=>r.HOTEL_MANAGER_ROUTES),canMatch:[hotelManagerGuard]},
    {path:'landingDash',loadChildren:()=>import('./TourPackageManager/packageMan.routes').then(r=>r.PACKAGE_MANAGER),canMatch:[packageManagerGuard]},
    {path:'landingDash',loadChildren:()=>import('./Traveller/traveller.routes').then(r=>r.TRAVELLER_ROUTES),canMatch:[travellerGuard]},
    {path:'landingDash',loadChildren:()=>import('./Dashboards/user.routes').then(r=>r.UserRoutes)},

    
];
