  import {Component, Inject, OnInit} from '@angular/core';
  import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
  import {CustomSnackBarData} from '../../interface/CustomSnackBarData';
  import {CommonModule, NgClass} from '@angular/common';
  import {MatButton} from '@angular/material/button';

    @Component({
      selector: 'app-snack-bar',
      imports: [
        CommonModule,
        NgClass,
        MatButton
      ],
      templateUrl: './snack-bar.html',
      styleUrl: './snack-bar.css'
    })
    export class SnackBarComponent implements OnInit{
      constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: CustomSnackBarData,
        public snackBarRef: MatSnackBarRef<SnackBarComponent>
      ) {}

      ngOnInit() {
        // Fecha automaticamente após 5 segundos, a menos que seja um erro
        if (this.data.type !== 'error') {
          setTimeout(() => {
            this.snackBarRef.dismiss();
          }, 5000);
        }
      }
      getDefaultIconPath(type: string): string {
        switch (type) {
          case 'success':
            return 'assets/ícones/check.svg';
          case 'error':
            return 'assets/ícones/Erro.svg';
          case 'warn':
            return 'assets/ícones/Warning.svg';
          case 'info':
            return 'assets/ícones/Info.svg';
          default:
            return 'assets/ícones/Info.svg';
        }
      }
    }
