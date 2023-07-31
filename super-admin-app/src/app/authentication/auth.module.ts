import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { InputModule } from '../shared/input/input.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        InputModule],
    providers: []
})
export class AuthModule { }
