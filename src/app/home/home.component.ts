import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {NavbarComponent} from '../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
}
