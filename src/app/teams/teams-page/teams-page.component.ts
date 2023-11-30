import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './teams-page.component.html',
  styleUrl: './teams-page.component.scss'
})
export class TeamsPageComponent {

}
