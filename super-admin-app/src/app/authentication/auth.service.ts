import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): boolean {
    // Simulate authentication logic (replace this with your actual authentication logic)
    // if (email === 'user@example.com' && password === 'password') {
    //   // Fake user data for demonstration purposes (replace with actual user data)
      const user = {
        email: email,
      };

      // Store user data in local storage
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    // }

    // return false;
  }

  logout(): void {
    // Remove user data from local storage on logout
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    // Get the current user data from local storage
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }
}
