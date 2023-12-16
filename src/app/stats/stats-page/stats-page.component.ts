import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {StatsTabComponent} from "../components/stats-tab/stats-tab.component";
import {StatsModel} from "../models/stats.model";
import {PointsPlayers} from "../models/players/stats-points";
import {StatsTeams} from "../models/teams/stats-teams";
import {ReboundsPlayers} from "../models/players/stats-rebounds";
import {AssistsPlayers} from "../models/players/stats-assists";
import {StealsPlayers} from "../models/players/stats-steals";
import {BlocksPlayers} from "../models/players/stats-blocks";
import {TwoPointersPlayers} from "../models/players/stats-twopointers";
import {ThreePointersPlayers} from "../models/players/stats-threepointers";
import {FreePointersPlayers} from "../models/players/stats-freepointers";


@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, StatsTabComponent],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {
  selectedLeague: string = 'euroleague';
  protected readonly playersPoints: StatsModel[] = PointsPlayers;
  protected readonly playersRebounds: StatsModel[] = ReboundsPlayers;
  protected readonly playersAssists: StatsModel[] = AssistsPlayers;
  protected readonly playersBlocks: StatsModel[] = BlocksPlayers;
  protected readonly playersSteals: StatsModel[] = StealsPlayers;
  protected readonly players2P: StatsModel[] = TwoPointersPlayers;
  protected readonly players3P: StatsModel[] = ThreePointersPlayers;
  protected readonly playersFT: StatsModel[] = FreePointersPlayers;

  protected readonly teamsSource: StatsModel[] = StatsTeams;
}
