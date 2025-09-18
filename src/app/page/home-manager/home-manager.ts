import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-manager',
  imports: [
    MatToolbar,
    RouterLink
  ],
  templateUrl: './home-manager.html',
  styleUrl: './home-manager.css'
})
export class HomeManagerComponent {
  constructor(private router: Router) {
  }

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
