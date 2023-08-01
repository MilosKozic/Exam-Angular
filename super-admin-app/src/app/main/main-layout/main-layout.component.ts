import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor(private authService: AuthService,private themeService: ThemeService) {}

  toogleTheme() {
    this.themeService.toggleBodyClass()
  }

  logout() {
    this.authService.logout();
  }
}
