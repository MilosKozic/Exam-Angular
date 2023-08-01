import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(email: string, password: string): Observable<Object> {
    return this.httpClient
    .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMQMYwxBu8_TBRkZ71NImuhf3jJPMwjcw',
        {
            email: email, 
            password: password,
            returnSecureToken: true
        }
    )
  }

  login(email: string, password: string): Observable<Object> {
    return this.httpClient
    .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMQMYwxBu8_TBRkZ71NImuhf3jJPMwjcw',
        {
            email: email, 
            password: password,
            returnSecureToken: true
        }
    )
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login'])
  }
}
