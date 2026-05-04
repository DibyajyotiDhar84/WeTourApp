import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-loading-dash',
  imports: [LottieComponent],
  templateUrl: './loading-dash.html',
  styleUrl: './loading-dash.css',
})
export class LoadingDash {

  // Define the options for the animation
  options: AnimationOptions = {
    // Point this to where you saved the JSON in your assets folder
    path: '/assets/Traveler.json', 
    loop: true,
    autoplay: true,
  };

  // Optional: You can capture the animation instance if you want to 
  // manually play, pause, or change the speed later using signals/events
  animationCreated(animationItem: any): void {
    console.log('Lottie animation fully loaded and playing!');
  }

}
