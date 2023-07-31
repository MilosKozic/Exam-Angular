import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  usernameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  confirmPasswordControl: FormControl;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.usernameControl = this.formBuilder.control('', [Validators.required]);
    this.emailControl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.passwordControl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    this.confirmPasswordControl = this.formBuilder.control('', [Validators.required]);

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
      // Handle registration logic here
    }
    console.log(this.passwordControl, this.confirmPasswordControl, this.registerForm.errors?.['passwordMismatch'])
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
