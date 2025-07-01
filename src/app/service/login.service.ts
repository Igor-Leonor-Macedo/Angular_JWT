  import {Injectable} from '@angular/core';
  import {BehaviorSubject, catchError, Observable, tap, throwError} from 'rxjs';
  import {HttpClient} from "@angular/common/http";
  import {Router} from '@angular/router';

  @Injectable({
      providedIn: 'root'
    })
    export class LoginService{
      private apiUrl = 'http://localhost:8080'; // URL do seu Spring Boot
      private tokenSubject = new BehaviorSubject<string | null>(null);


      constructor(private router: Router, private http: HttpClient) {

      }

      login(cpf:string, password: string):Observable<string>{
        const credentials = btoa(`${cpf}:${password}`); // Codifica para Basic Auth
        const headers = {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json'
        };

        return this.http.post(`${this.apiUrl}/authenticateUser`, {}, { headers, responseType: 'text' })
          .pipe(
            tap(response => {
              if (response) {
                localStorage.setItem('token', response);
                this.tokenSubject.next(response);
              }
              else {
                console.log('Erro:', response);
              }
            }),
            catchError(error => {
              // Registra o erro no console para debug
              console.error('Erro na requisição de login:', error);

              // Propaga o erro para ser tratado no componente
              return throwError(() => error);
            })
          );
      }
      logout(): void {
        localStorage.removeItem('token');
        this.tokenSubject.next(null);
      }

      getToken(): string | null {
        return this.tokenSubject.value;
      }

      isAuthenticated(): boolean {
        return !!this.getToken();
      }

      // Decodificar JWT para pegar dados do usuário
      getUserData(): any {
        const token = this.getToken();
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload;
        }
        return null;
      }
    }
