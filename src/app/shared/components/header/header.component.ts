import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, HostListener, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawer, MatSidenavModule} from "@angular/material/sidenav";
import {RouterLinkActive} from "@angular/router";
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
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    RouterLinkActive,

  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class NavbarComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  navLinks: string[] = ['Home', 'News', 'Events', 'Schedule', 'Stats', 'Standings', 'Teams', 'Players'];
  isScreenSmall: boolean = false;

  constructor(public authService: AuthService) {
    this.isScreenSmall = window.innerWidth <= 1300;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.isScreenSmall = window.innerWidth <= 1300;
    if (!this.isScreenSmall && this.drawer.opened) {
      this.drawer.close().then();
    }
  }

  toggleDrawer() {
    const drawerWidth = this.drawer._getWidth();
    this.drawer.toggle().then();
    if (this.drawer.opened) {
      document.querySelector('.header-menu')!.classList.add('open');
    } else {
      document.querySelector('.header-menu')!.classList.remove('open');
    }
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
