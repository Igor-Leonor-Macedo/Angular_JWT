  import {Injectable} from '@angular/core';
  import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
  import {CustomSnackBarData} from '../interface/CustomSnackBarData';
  import { SnackBarComponent } from '../component/snack-bar/snack-bar'

    @Injectable({
      providedIn: 'root'
    })
    export class SnackbarService{
      constructor(private snackBar: MatSnackBar) {
      }

      // Configurações padrão
      private defaultConfig: MatSnackBarConfig = {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        // Não definimos duration, pois o componente fará isso
      };
      // Método genérico para abrir a snack-bar com configurações personalizadas
      private openSnackBar(data: CustomSnackBarData): void {
        this.snackBar.openFromComponent(SnackBarComponent, {
          ...this.defaultConfig,
          data
        });
      }
      // Método para exibir mensagem de sucesso
      success(message: string, action: string = 'Fechar', iconPath?: string): void {
        this.openSnackBar({
          message,
          action,
          type: 'success',
          iconPath
        });
      }
      // Método para exibir mensagem de erro
      error(message: string, action: string = 'Fechar', iconPath?: string): void {
        this.openSnackBar({
          message,
          action,
          type: 'error',
          iconPath
        });
      }
      // Método para exibir mensagem de alerta
      warn(message: string, action: string = 'Fechar', iconPath?: string): void {
        this.openSnackBar({
          message,
          action,
          type: 'warn',
          iconPath
        });
      }
      // Método para exibir mensagem informativa
      info(message: string, action: string = 'Fechar', iconPath?: string): void {
        this.openSnackBar({
          message,
          action,
          type: 'info',
          iconPath
        });
      }
    }
