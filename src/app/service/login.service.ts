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
                this.extractAndSaveUserData(response);
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
      getToken(): string | null {
        return this.tokenSubject.value;
      }
      private extractAndSaveUserData(token: string): void {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const userData: UserData = {
            userId: payload.userId,
            roles: payload.roles || []
          };
          localStorage.setItem('userId', userData.userId);
          console.log("id: ",userData.userId)
          localStorage.setItem('userRoles', JSON.stringify(userData.roles));
          console.log("roles: ",userData.roles)
        }
        catch (error) {
          console.error('Erro ao decodificar token:', error);
        }
      }
    }
