import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {TeamModel} from "../../models/team.model";


@Component({
  selector: 'app-teams-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './teams-card.component.html',
  styleUrl: './teams-card.component.scss'
})
export class TeamsCardComponent {
  @Input() teamsSource!: TeamModel;
}
