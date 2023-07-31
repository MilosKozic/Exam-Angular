import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService,
  ) {
    this.emailControl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.passwordControl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);

    this.loginForm = this.formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Simulate authentication by calling the fake authentication service
      const isLoggedIn = this.authService.login(email, password);

      if (isLoggedIn) {
        // Redirect to the home page after successful login
        this.router.navigate(['/home']);
      } else {
        // Handle authentication error (display error message, etc.)
      }
    }
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

}
