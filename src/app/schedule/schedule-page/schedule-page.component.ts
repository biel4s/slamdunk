import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ScheduleCardComponent} from "../components/schedule-card/schedule-card.component";
import {Match} from "../models/match.model";
import {MatchData} from "../models/match";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, ScheduleCardComponent, MatButtonModule],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {
  selectedLeague: string = 'euroleague';
  protected readonly matchData: Match = MatchData;
}
