import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  logout() {

  }
}
