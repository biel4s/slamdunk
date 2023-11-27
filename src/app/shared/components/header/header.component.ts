import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthService} from "../../../auth/auth.service";

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
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class NavbarComponent {
  navLinks = ['Home', 'News', 'Leagues', 'Standings', 'Teams', 'Players', 'Events', 'About'];
  leagueLinks = ['EuroLeague', 'EuroCup', 'BCL', 'ACB', 'BSL', 'Lega Basket A']
  isScrolled: boolean = false;

  constructor(public authService: AuthService) {
  }

  @HostListener('window:scroll', [])

  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}
