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
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe((data: any) => {
        console.log(data)
        this.router.navigate(['/home']);
        localStorage.setItem('currentUser', JSON.stringify(data.idToken));
      }, (error: any) => {
        console.log(error);
      })
    }
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

}
