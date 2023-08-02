import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  usernameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  confirmPasswordControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.usernameControl = this.formBuilder.control('', [Validators.required]);
    this.emailControl = this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordControl = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    this.confirmPasswordControl = this.formBuilder.control('', [
      Validators.required,
    ]);

    this.registerForm = this.formBuilder.group(
      {
        username: this.usernameControl,
        email: this.emailControl,
        password: this.passwordControl,
        confirmPassword: this.confirmPasswordControl,
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;

      this.authService.register(email, password).subscribe(
        (data: any) => {
          this.router.navigate(['/home/form']);
          localStorage.setItem('token', JSON.stringify(data.idToken));
          this.toastr.success('You are successfully logged in');
          //this is simplified, the real logic would require sending a link to the user's email from where he can activate his account,
          // which would further require some additional components
        });
    }
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
