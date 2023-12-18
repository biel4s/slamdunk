import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {StatsTabComponent} from "../components/stats-tab/stats-tab.component";
import {StatsModel} from "../models/stats.model";
import {TotalPointsPlayers} from "../models/players/Total/statsTotal-points";
import {StatsTeams} from "../models/teams/stats-teams";
import {TotalReboundsPlayers} from "../models/players/Total/statsTotal-rebounds";
import {TotalAssistsPlayers} from "../models/players/Total/statsTotal-assists";
import {TotalStealsPlayers} from "../models/players/Total/statsTotal-steals";
import {TotalBlocksPlayers} from "../models/players/Total/statsTotal-blocks";
import {TotalTwoPointersPlayers} from "../models/players/Total/statsTotal-twopointers";
import {TotalThreePointersPlayers} from "../models/players/Total/statsTotal-threepointers";
import {TotalFreePointersPlayers} from "../models/players/Total/statsTotal-freepointers";
import {AveragePointsPlayers} from "../models/players/Average/statsAverage-points";
import {AverageReboundsPlayers} from "../models/players/Average/statsAverage-rebounds";
import {AverageFreePointersPlayers} from "../models/players/Average/statsAverage-freepointers";
import {AverageThreePointersPlayers} from "../models/players/Average/statsAverage-threepointers";
import {AverageTwoPointersPlayers} from "../models/players/Average/statsAverage-twopointers";
import {AverageStealsPlayers} from "../models/players/Average/statsAverage-steals";
import {AverageBlocksPlayers} from "../models/players/Average/statsAverage-blocks";
import {AverageAssistsPlayers} from "../models/players/Average/statsAverage-assists";


@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, StatsTabComponent],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {
  selectedStatistics: string = 'Total';
  selectedLeague: string = 'euroleague';

  protected readonly playersTotalPoints: StatsModel[] = TotalPointsPlayers;
  protected readonly playersTotalRebounds: StatsModel[] = TotalReboundsPlayers;
  protected readonly playersTotalAssists: StatsModel[] = TotalAssistsPlayers;
  protected readonly playersTotalBlocks: StatsModel[] = TotalBlocksPlayers;
  protected readonly playersTotalSteals: StatsModel[] = TotalStealsPlayers;
  protected readonly playersTotal2P: StatsModel[] = TotalTwoPointersPlayers;
  protected readonly playersTotal3P: StatsModel[] = TotalThreePointersPlayers;
  protected readonly playersTotalFT: StatsModel[] = TotalFreePointersPlayers;

  protected readonly playersAveragePoints: StatsModel[] = AveragePointsPlayers;
  protected readonly playersAverageRebounds: StatsModel[] = AverageReboundsPlayers;
  protected readonly playersAverageAssists: StatsModel[] = AverageAssistsPlayers;
  protected readonly playersAverageBlocks: StatsModel[] = AverageBlocksPlayers;
  protected readonly playersAverageSteals: StatsModel[] = AverageStealsPlayers;
  protected readonly playersAverage2P: StatsModel[] = AverageTwoPointersPlayers;
  protected readonly playersAverage3P: StatsModel[] = AverageThreePointersPlayers;
  protected readonly playersAverageFT: StatsModel[] = AverageFreePointersPlayers;

  protected readonly teamsSource: StatsModel[] = StatsTeams;
}
