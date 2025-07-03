import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-acesso-negado',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './acesso-negado.html',
  styleUrl: './acesso-negado.css'
})
export class AcessoNegadoComponent {

}
