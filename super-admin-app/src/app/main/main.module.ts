import { NgModule } from '@angular/core';
import { ButtonModule } from '../shared/button/button.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { ConfirmModule } from '../shared/confirm-modal/confirm-modal.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MainLayoutComponent,
    MainComponent,
    TableComponent,
  ],
  imports: [CommonModule, MainRoutingModule, ButtonModule, ConfirmModule],
  exports: [],
})
export class MainModule {}
