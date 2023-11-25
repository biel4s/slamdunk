import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router, RouterLink} from '@angular/router';
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
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class NavbarComponent {
  navLinks = ['Home', 'About', 'News', 'Events', 'More'];
  moreLinks = ['League', 'Players', 'Calendar', 'Standings', 'Contact'];
  leagueLinks = ['EuroLeague', 'EuroCup', 'BCL', 'ACB', 'BSL', 'Lega Basket A']
  isScrolled: boolean = false;

  constructor(private router: Router, public authService: AuthService) {
  }

  @HostListener('window:scroll', [])

  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId.toLowerCase())?.scrollIntoView({behavior: 'smooth'});
  }
}
