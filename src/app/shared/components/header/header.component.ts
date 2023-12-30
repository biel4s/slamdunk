import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router, RouterLinkActive} from "@angular/router";
import {LoginPageStore} from "../../../auth/login-page/login-page.store";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [LoginPageStore],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class NavbarComponent {
  navLinks: string[] = ['Home', 'News', 'Events', 'Schedule', 'Stats', 'Standings', 'Teams', 'Players'];
  isScrolled: boolean = false;

  constructor(public authService: AuthService, private loginPageStore: LoginPageStore, private router: Router) {
  }

  @HostListener('window:scroll', [])

  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  onLogout(): void {
    this.authService.logout();
  }

  goToLoginPage(): void {
    this.authService.goToLoginPage();
  }

  goToRegisterPage(): void {
    this.authService.goToRegisterPage();
  }
}
