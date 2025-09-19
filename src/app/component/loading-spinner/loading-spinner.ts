import {Component, Input} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  imports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css'
})
export class LoadingSpinner {
  @Input() loading = false;
  @Input() delay = 0; // tempo de delay em milissegundos
}
