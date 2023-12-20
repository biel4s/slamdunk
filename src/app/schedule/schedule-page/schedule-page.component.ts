import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ScheduleCardComponent} from "../components/schedule-card/schedule-card.component";
import {MatchModel} from "../models/match.model";
import {MatchData5Dec} from "../models/match-5dec";
import {MatchData6Dec} from "../models/match-6dec";
import {MatButtonModule} from "@angular/material/button";
import {TeamsCardComponent} from "../../teams/components/teams-card/teams-card.component";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, ScheduleCardComponent, MatButtonModule, TeamsCardComponent],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {
  selectedLeague: string = 'euroleague';
  protected readonly matchData5Dec: MatchModel[] = MatchData5Dec;
  protected readonly matchData6Dec: MatchModel[] = MatchData6Dec;
}
