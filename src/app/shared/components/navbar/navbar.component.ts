import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navLinks = ['Home', 'About', 'News', 'Events', 'More'];
  moreLinks = ['League', 'Players', 'Calendar', 'Standings', 'Contact'];
  leagueLinks = ['EuroLeague', 'EuroCup', 'BCL', 'ACB', 'BSL', 'Lega Basket A']

  constructor(private router: Router) {
  }

  goToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  goToRegisterPage(): void {
    this.router.navigate(['/register']);
  }
}
