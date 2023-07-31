import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  emailControl: FormControl;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.emailControl = this.formBuilder.control('', [Validators.required, Validators.email]);
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  handleSubmit() {
    //add logic for reset password
    //show user message that link has been sent to his email address regardles if that address is in the system
  }
}
