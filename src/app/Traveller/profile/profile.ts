import { Component, inject, signal } from '@angular/core';
import { Authservice } from '../../services/AuthService/authservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

 interface UserProfile {

  email:string,
  name:string,
  role:string,
  phone:string,

}

@Component({
  selector: 'app-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  authService=inject(Authservice);
  public readonly avatarPool = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=George',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Milo'
  ];

  user = signal<UserProfile | null>(null);
  isEditing = signal(false);
  currentAvatar = signal(
    localStorage.getItem('AVATAR_STORAGE_KEY') || this.avatarPool[0]
  );

  constructor() {
    this.authService.currentUser.subscribe(data => this.user.set({ ...data }));
  }

  toggleEdit() {
    this.isEditing.set(!this.isEditing());
  }

  shuffleAvatar() {
    const pool = this.avatarPool;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const newAvatar = pool[randomIndex];

    this.currentAvatar.set(newAvatar);
    localStorage.setItem('AVATAR_STORAGE_KEY', newAvatar);
  }

  saveProfile() {
    // if (this.user()) {
    //   this.userService.updateUser(this.user()!);
    //   this.isEditing.set(false);
    // }
  }

}
