import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { InputModule } from '../shared/input/input.module';
import { ButtonModule } from '../shared/button/button.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthLayoutComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        InputModule,
        ButtonModule
        ],
    providers: []
})
export class AuthModule { }
