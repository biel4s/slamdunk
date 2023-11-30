import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-standings-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './standings-page.component.html',
  styleUrl: './standings-page.component.scss'
})
export class StandingsPageComponent {

}
