  import {Injectable} from '@angular/core';
  import {catchError, Observable, tap, throwError} from 'rxjs';
  import {HttpClient} from "@angular/common/http";
  import {Router} from '@angular/router';

  @Injectable({
      providedIn: 'root'
    })
    export class LoginService{
      private urlLogin = 'http://localhost:8080/authenticate';

      constructor(private router: Router, private http: HttpClient) {
      }

      login(cpf:string, password: string):Observable<Login>{
        return this.http.post<Login>(this.urlLogin, { cpf, password})
          .pipe(
            tap(response => {
              if (response) {

              }
              else {
                console.log('Resposta de erro:', response);
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
    }
