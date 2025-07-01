  import {Injectable} from '@angular/core';
  import {BehaviorSubject, catchError, Observable, tap, throwError} from 'rxjs';
  import {HttpClient} from "@angular/common/http";
  import {Router} from '@angular/router';

  @Injectable({
      providedIn: 'root'
    })
    export class LoginService{
      private apiUrl = 'http://localhost:8080'; // URL do seu Spring Boot

    constructor(private router: Router, private http: HttpClient) {
      }

      login(cpf:string, password: string):Observable<string>{
        const credentials = btoa(`${cpf}:${password}`); // Codifica para Basic Auth
        const headers = {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json'
        };
        return this.http.post(`${this.apiUrl}/authenticateUser`, {}, { headers, responseType: 'text' })
      }
    }
