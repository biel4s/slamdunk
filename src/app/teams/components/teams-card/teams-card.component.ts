import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-teams-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './teams-card.component.html',
  styleUrl: './teams-card.component.scss'
})
export class TeamsCardComponent {

}
