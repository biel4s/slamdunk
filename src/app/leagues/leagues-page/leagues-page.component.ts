import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-leagues-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './leagues-page.component.html',
  styleUrl: './leagues-page.component.scss'
})
export class LeaguesPageComponent {

}
