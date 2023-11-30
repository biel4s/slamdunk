import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss'
})
export class PlayersPageComponent {

}
