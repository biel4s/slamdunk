import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthService} from "../../../auth/auth.service";
import {Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
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
  isHomeRoute: boolean = false;

  constructor(public authService: AuthService, private router: Router) {
  }

  @HostListener('window:scroll', [])

  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  isHomeRouter(): void {
    this.router.events.subscribe(event => {
      this.isHomeRoute = this.router.url === '/home';
    });
  }
}
