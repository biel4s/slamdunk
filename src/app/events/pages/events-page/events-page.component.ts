import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatchData6Dec} from "../../../schedule/models/match-6dec";
import {MatchData5Dec} from "../../../schedule/models/match-5dec";
import {MatButtonModule} from "@angular/material/button";
import {ScheduleCardComponent} from "../../../schedule/components/schedule-card/schedule-card.component";
import {EventsCardComponent} from "../../components/events-card/events-card.component";

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, MatButtonModule, ScheduleCardComponent, EventsCardComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {
  selectedYear: number = 2023;
  protected readonly MatchData6Dec = MatchData6Dec;
  protected readonly MatchData5Dec = MatchData5Dec;
}
