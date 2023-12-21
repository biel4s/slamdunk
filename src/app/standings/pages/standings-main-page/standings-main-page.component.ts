import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {StandingsTabComponent} from "../../components/standings-tab/standings-tab.component";
import {StandingsModel} from "../../models/standings.model";
import {StandingsEuroLeague} from "../../models/standings-euroleague";
import {StandingsEuroCupA} from "../../models/standings-eurocupA";
import {StandingsEuroCupB} from "../../models/standings-eurocupB";


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
