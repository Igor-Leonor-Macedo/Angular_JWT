import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  providers:[
    MatIconModule
  ]
})
export class LoginComponent {

  onLogin() {

  }

  registerUser() {

  }
}
