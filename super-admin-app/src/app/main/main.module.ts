import { NgModule } from '@angular/core';
import { ButtonModule } from '../shared/button/button.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MainLayoutComponent,
    MainComponent,
  ],
  imports: [MainRoutingModule, ButtonModule],
  exports: [],
})
export class MainModule {}
