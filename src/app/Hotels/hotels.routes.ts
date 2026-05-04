import { Route, Routes } from "@angular/router";
import { HotelForm } from "./hotel-form/hotel-form";
import { accessServiceGuard } from "../guards/access-service-guard";


export const HOTEL_ROUTES: Routes =[

    {path:'',redirectTo:'hotelForm',pathMatch:"full"},
    {path:'hotelForm',loadComponent:()=>import('./hotel-form/hotel-form').then(r=>r.HotelForm)},
    {path:'searchedHotels',loadComponent:()=>import('./hotel-searched/hotel-searched').then(r=>r.HotelSearched)},
    {path:'hoteldetails/:id',loadComponent:()=>import('./sel-hotel-details/sel-hotel-details').then(r=>r.SelHotelDetails)},
    {path:'hotelsummary',loadComponent:()=>import('./sel-hotel-info/sel-hotel-info').then(r=>r.SelHotelInfo),canActivate:[accessServiceGuard]},
    
   

]