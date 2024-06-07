import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {StandingsTabComponent} from "../../components/standings-tab/standings-tab.component";
import {StandingsEuroCupA} from "../../models/standings-eurocupA";
import {StandingsEuroCupB} from "../../models/standings-eurocupB";
import {StandingsEuroLeague} from "../../models/standings-euroleague";
import {StandingsModel} from "../../models/standings.model";


@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule, StandingsTabComponent],
  templateUrl: './standings-main-page.component.html',
  styleUrl: './standings-main-page.component.scss'
})
export class StandingsMainPageComponent {
  protected readonly standingsEuroLeague: StandingsModel[] = StandingsEuroLeague;
  protected readonly standingsEuroCupA: StandingsModel[] = StandingsEuroCupA;
  protected readonly standingsEuroCupB: StandingsModel[] = StandingsEuroCupB;
}
