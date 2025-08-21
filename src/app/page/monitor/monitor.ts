import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {Router} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormField, MatLabel} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-monitor',
  imports: [
    MatToolbar,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './monitor.html',
  styleUrl: './monitor.css'
})
export class MonitorComponent implements OnInit{
  form1!: FormGroup;
  form2!: FormGroup;

  showForm1 = false;
  showForm2 = false;

  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });

    this.form2 = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  addNewForm(formNumber: number): void {
    if (formNumber === 1) this.showForm1 = true;
    if (formNumber === 2) this.showForm2 = true;
  }

  cancelForm(formNumber: number): void {
    if (formNumber === 1) {
      this.showForm1 = false;
      this.form1.reset();
    }
    if (formNumber === 2) {
      this.showForm2 = false;
      this.form2.reset();
    }
  }

  onSubmit(formNumber: number): void {
    if (formNumber === 1 && this.form1.valid) {
      console.log('Formulário 1:', this.form1.value);
      alert(`Formulário 1\nNome: ${this.form1.value.nome} \nCPF: ${this.form1.value.cpf}`);
      this.cancelForm(1);
    }

    if (formNumber === 2 && this.form2.valid) {
      console.log('Formulário 2:', this.form2.value);
      alert(`Formulário 2\nNome: ${this.form2.value.nome} \nCPF: ${this.form2.value.cpf}`);
      this.cancelForm(2);
    }
  }

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
