import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-home-admin',
  imports: [
    MatToolbar,
    RouterLink
  ],
  templateUrl: './home-admin.html',
  styleUrl: './home-admin.css'
})
export class HomeAdminComponent {
  constructor(private router: Router) {
  }

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
