import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatInput, MatLabel} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {LoginService} from '../../service/login.service';
import {SnackbarService} from '../../service/snack-bar.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatCard,
    MatButton,
    MatFormFieldModule,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatIconButton,
    NgxMaskDirective
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  providers:[
    provideNgxMask()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup;
  cpf: string ="";

  hide = signal(true);
  togglePasswordVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService, private snackbarService: SnackbarService) {
    this.form = this.fb.group({
      CPF: ['', [Validators.required, Validators.minLength(11)]],
      Password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onLogin() {
      if(this.form.invalid){
        this.snackbarService.warn('Por favor, preencha todos os campos corretamente!');
        return;
      }
      // Obtém o CPF do formulário e aplica a formatação
      const cpf = this.formatCPF(this.form.get('CPF')?.value);
      const password = this.form.get('Password')?.value;

      this.loginService.login(cpf, password).subscribe({
        next:(response)=>{
          if(response){

          }
        },
        error:(error)=>{
          const errorMessage = error.error?.message || 'Erro ao tentar fazer login. Por favor, tente novamente.';
          this.snackbarService.error(errorMessage);
        }
      })
  }

  registerUser() {
    this.router.navigate(['/register']);
  }
  formatCPF(cpf: string): string {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
    // Aplica a formatação do CPF (xxx.xxx.xxx-xx)
    if (cpf.length > 9) {
      cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
      cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1.$2.$3');
    } else if (cpf.length > 3) {
      cpf = cpf.replace(/^(\d{3})(\d{3})$/, '$1.$2');
    }
    return cpf;
  }
}
