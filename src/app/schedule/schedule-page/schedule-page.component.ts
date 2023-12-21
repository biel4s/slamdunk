import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ScheduleCardComponent} from "../components/schedule-card/schedule-card.component";
import {MatchModel} from "../models/match.model";
import {EuroleagueMatchData5Dec} from "../models/euroleague/match-5dec";
import {EuroleagueMatchData6Dec} from "../models/euroleague/match-6dec";
import {MatButtonModule} from "@angular/material/button";
import {TeamsCardComponent} from "../../teams/components/teams-card/teams-card.component";
import {EuroleagueMatchData7Dec} from "../models/euroleague/match-7dec";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EuroCupMatchData5Dec} from "../models/eurocup/match-5dec";
import {EuroCupMatchData6Dec} from "../models/eurocup/match-6dec";
import {EuroCupMatchData12Dec} from "../models/eurocup/match-12dec";
import {BCLMatchData5Dec} from "../models/bcl/match-5dec";
import {BCLMatchData6Dec} from "../models/bcl/match-6dec";
import {BCLMatchData12Dec} from "../models/bcl/match-12dec";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, ScheduleCardComponent, MatButtonModule, TeamsCardComponent],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {
  selectedLeague: string = 'euroleague';
  errorMessage: string = '';
  currentIndex: number = 2;
  showLastMatch: boolean = false;

  protected readonly euroleagueMatchData5Dec: MatchModel[] = EuroleagueMatchData5Dec;
  protected readonly euroleagueMatchData6Dec: MatchModel[] = EuroleagueMatchData6Dec;
  protected readonly euroleagueMatchData7Dec: MatchModel[] = EuroleagueMatchData7Dec;
  protected readonly eurocupMatchData5Dec: MatchModel[] = EuroCupMatchData5Dec;
  protected readonly eurocupMatchData6Dec: MatchModel[] = EuroCupMatchData6Dec;
  protected readonly eurocupMatchData12Dec: MatchModel[] = EuroCupMatchData12Dec;
  protected readonly bclMatchData5Dec: MatchModel[] = BCLMatchData5Dec;
  protected readonly bclMatchData6Dec: MatchModel[] = BCLMatchData6Dec;
  protected readonly bclMatchData12Dec: MatchModel[] = BCLMatchData12Dec;

  protected readonly matchData: { [key: string]: { [date: string]: MatchModel[] } } = {
    'euroleague': {
      '5 December 2023': this.euroleagueMatchData5Dec,
      '6 December 2023': this.euroleagueMatchData6Dec,
      '7 December 2023': this.euroleagueMatchData7Dec
    },
    'eurocup': {
      '5 December 2023': this.eurocupMatchData5Dec,
      '6 December 2023': this.eurocupMatchData6Dec,
      '12 December 2023': this.eurocupMatchData12Dec
    },
    'bcl': {
      '5 December 2023': this.bclMatchData5Dec,
      '6 December 2023': this.bclMatchData6Dec,
      '12 December 2023': this.bclMatchData12Dec
    }
  }
  protected readonly Object: ObjectConstructor = Object;

  constructor(private _snackBar: MatSnackBar) {
  }

  loadMore(): void {
    this.currentIndex += 1;
    const matchesNumber: number = Object.keys(this.matchData[this.selectedLeague]).length;
    if (this.currentIndex == matchesNumber) {
      this.showLastMatch = true;
    } else if (this.currentIndex > matchesNumber) {
      this._snackBar.open("No more matches available!", "OK", {duration: 5000});
      return;
    }
  }
}
