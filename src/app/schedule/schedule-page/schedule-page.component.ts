import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";
import {ShapeDividerComponent} from "../../shared/components/shape-divider/shape-divider.component";
import {TeamsCardComponent} from "../../teams/components/teams-card/teams-card.component";
import {ScheduleCardComponent} from "../components/schedule-card/schedule-card.component";
import {ACBMatchData10Dec} from "../models/acb/match-10dec";
import {ACBMatchData3Dec} from "../models/acb/match-3dec";
import {ACBMatchData9Dec} from "../models/acb/match-9dec";
import {BCLMatchData12Dec} from "../models/bcl/match-12dec";
import {BCLMatchData5Dec} from "../models/bcl/match-5dec";
import {BCLMatchData6Dec} from "../models/bcl/match-6dec";
import {BSLMatchData3Dec} from "../models/bsl/match-3dec";
import {BSLMatchData8Dec} from "../models/bsl/match-8dec";
import {BSLMatchData9Dec} from "../models/bsl/match-9dec";
import {EuroCupMatchData12Dec} from "../models/eurocup/match-12dec";
import {EuroCupMatchData5Dec} from "../models/eurocup/match-5dec";
import {EuroCupMatchData6Dec} from "../models/eurocup/match-6dec";
import {EuroleagueMatchData5Dec} from "../models/euroleague/match-5dec";
import {EuroleagueMatchData6Dec} from "../models/euroleague/match-6dec";
import {EuroleagueMatchData7Dec} from "../models/euroleague/match-7dec";
import {LegaBasketAMatchData10Dec} from "../models/legabasketa/match-10dec";
import {LegaBasketAMatchData17Dec} from "../models/legabasketa/match-17dec";
import {LegaBasketAMatchData3Dec} from "../models/legabasketa/match-3dec";
import {MatchModel} from "../models/match.model";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, ScheduleCardComponent, MatButtonModule, TeamsCardComponent, ShapeDividerComponent],
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
  protected readonly acbMatchData3Dec: MatchModel[] = ACBMatchData3Dec;
  protected readonly acbMatchData9Dec: MatchModel[] = ACBMatchData9Dec;
  protected readonly acbMatchData10Dec: MatchModel[] = ACBMatchData10Dec;
  protected readonly bslMatchData3Dec: MatchModel[] = BSLMatchData3Dec;
  protected readonly bslMatchData8Dec: MatchModel[] = BSLMatchData8Dec;
  protected readonly bslMatchData9Dec: MatchModel[] = BSLMatchData9Dec;
  protected readonly legabasketaMatchData3Dec: MatchModel[] = LegaBasketAMatchData3Dec;
  protected readonly legabasketaMatchData10Dec: MatchModel[] = LegaBasketAMatchData10Dec;
  protected readonly legabasketaMatchData17Dec: MatchModel[] = LegaBasketAMatchData17Dec;


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
    },
    'acb': {
      '3 December 2023': this.acbMatchData3Dec,
      '9 December 2023': this.acbMatchData9Dec,
      '10 December 2023': this.acbMatchData10Dec
    },
    'bsl': {
      '3 December 2023': this.bslMatchData3Dec,
      '8 December 2023': this.bslMatchData8Dec,
      '9 December 2023': this.bslMatchData9Dec
    },
    'lega basket a': {
      '3 December 2023': this.legabasketaMatchData3Dec,
      '10 December 2023': this.legabasketaMatchData10Dec,
      '17 December 2023': this.legabasketaMatchData17Dec
    },
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
