import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(email: any, password: any): any {
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

  login(email: any, password: any): any {
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
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    // Get the current user data from local storage
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }
}
