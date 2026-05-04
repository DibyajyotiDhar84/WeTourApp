import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-customer',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-customer.html',
  styleUrl: './admin-customer.css',
})
export class AdminCustomer {


  users = [
    { id: 'USR-001', name: 'Dibyajyoti Dhar', email: 'dibya@wetour.com', role: 'Admin', phone: '+91 98765-43210', status: 'Active', joined: '2026-01-10' },
    { id: 'USR-002', name: 'Sophia Miller', email: 'sophia.m@gmail.com', role: 'Customer', phone: '+1 415-555-0123', status: 'Active', joined: '2026-03-15' },
    { id: 'USR-003', name: 'Marco Rossi', email: 'marco.hotel@it.com', role: 'Hotel Manager', phone: '+39 02 1234567', status: 'Inactive', joined: '2026-02-20' },
    { id: 'USR-004', name: 'Ananya Singh', email: 'ananya.tours@agency.in', role: 'Travel Agent', phone: '+91 88888-77777', status: 'Active', joined: '2026-04-05' },
    { id: 'USR-005', name: 'Liam Hudson', email: 'liam.h@outlook.com', role: 'Customer', phone: '+44 20 7946 0958', status: 'Suspended', joined: '2026-01-25' }
  ];

  filteredUsers = [...this.users];
  searchQuery: string = '';
  roleFilter: string = 'All';

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      const matchesName = user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                          user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesRole = this.roleFilter === 'All' || user.role === this.roleFilter;
      return matchesName && matchesRole;
    });
  }

  toggleStatus(user: any) {
    user.status = user.status === 'Active' ? 'Inactive' : 'Active';
  }

  deleteUser(id: string) {
    this.users = this.users.filter(u => u.id !== id);
    this.applyFilters();
  }

}
