import { IsActiveMatchOptions, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get isLoginPageShown(): boolean {
    const matchOptions: IsActiveMatchOptions = {
      matrixParams: 'subset',
      queryParams: 'ignored',
      paths: 'exact',
      fragment: 'ignored',
    };
    return this.router.isActive('/login', matchOptions);
  }
  constructor(private readonly router: Router) {}
}
