import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {Router} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-monitor',
  imports: [
    MatToolbar,
    CommonModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  templateUrl: './monitor.html',
  styleUrl: './monitor.css'
})
export class MonitorComponent {

  constructor(private router: Router) {
  }

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  addNewForm() {

  }
}
