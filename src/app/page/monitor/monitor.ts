import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {Router} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormField, MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-monitor',
  imports: [
    MatInput,
    MatToolbar,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    FormsModule,

    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './monitor.html',
  styleUrl: './monitor.css'
})
export class MonitorComponent implements OnInit{
  forms: FormGroup[] = [];
  showForms: boolean[] = [];

  totalForms = 12; // aqui você controla quantos formulários quer
  disableSelect = new FormControl(false);

  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.totalForms; i++) {
      this.forms.push(
        this.fb.group({
          nome: ['', Validators.required],
          cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
        })
      );
      this.showForms.push(false); // todos começam ocultos
    }
  }

  addNewForm(index: number): void {
    this.showForms[index] = true;
  }

  cancelForm(index: number): void {
    this.showForms[index] = false;
    this.forms[index].reset();
  }

  onSubmit(index: number): void {
    if (this.forms[index].valid) {
      console.log(`Formulário ${index + 1}:`, this.forms[index].value);
      alert(`Formulário ${index + 1}\nNome: ${this.forms[index].value.nome} \nCPF: ${this.forms[index].value.cpf}`);
      this.cancelForm(index);
    } else {
      alert(`Preencha corretamente os campos do Formulário ${index + 1}`);
    }
  }

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
