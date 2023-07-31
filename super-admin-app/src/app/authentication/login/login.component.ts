import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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
    }
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

}
