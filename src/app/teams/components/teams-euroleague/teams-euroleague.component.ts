import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamsCardComponent} from "../teams-card/teams-card.component";
import {Team} from "../../models/team.model";
import {TeamsEuroLeague} from "../../models/euroleague";

@Component({
  selector: 'app-teams-euroleague',
  standalone: true,
  imports: [CommonModule, TeamsCardComponent],
  templateUrl: './teams-euroleague.component.html',
  styleUrl: './teams-euroleague.component.scss'
})
export class TeamsEuroleagueComponent {
  protected readonly teamsArray: Team[] = TeamsEuroLeague;
}
