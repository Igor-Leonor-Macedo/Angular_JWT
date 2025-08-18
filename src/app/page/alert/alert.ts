import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alert',
  imports: [
    MatToolbar
  ],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class AlertComponent {
  constructor(private router: Router) {
  }

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
