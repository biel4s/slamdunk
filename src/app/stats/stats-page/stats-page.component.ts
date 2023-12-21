import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {StatsTabComponent} from "../components/stats-tab/stats-tab.component";
import {StatsModel} from "../models/stats.model";
import * as euroleagueAveragePlayers from "../models/players/euroleague/averageStatsPlayers";
import * as euroleagueTotalPlayers from "../models/players/euroleague/totalStatsPlayers"
import * as euroleagueTotalTeams from "../models/teams/euroleague/totalStatsTeams";
import * as euroleagueAverageTeams from "../models/teams/euroleague/averageStatsTeams";
import * as eurocupTotalPlayers from "../models/players/eurocup/totalStatsPlayers";
import * as eurocupAveragePlayers from "../models/players/eurocup/averageStatsPlayers";
import * as eurocupTotalTeams from "../models/teams/eurocup/totalStatsTeams";
import * as eurocupAverageTeams from "../models/teams/eurocup/averageStatsTeams";
import * as bclTotalPlayers from "../models/players/bcl/totalStatsPlayers"
import * as bclAveragePlayers from "../models/players/bcl/averageStatsPlayers"
import * as bclTotalTeams from "../models/teams/bcl/totalStatsTeams"
import * as bclAverageTeams from "../models/teams/bcl/averageStatsTeams"

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, StatsTabComponent],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {
  selectedStatistics: string = 'Totals';
  selectedLeague: string = 'euroleague';

  leagueMapping: { [key: string]: number } = {
    'euroleague': 0,
    'eurocup': 1,
    'bcl': 2
  }

  totalPlayersStats: { heading: string; data: StatsModel[][] }[] = [
    {heading: 'Points', data: [euroleagueTotalPlayers.Points, eurocupTotalPlayers.Points, bclTotalPlayers.Points]},
    {
      heading: 'Rebounds',
      data: [euroleagueTotalPlayers.Rebounds, eurocupTotalPlayers.Rebounds, bclTotalPlayers.Rebounds]
    },
    {heading: 'Assists', data: [euroleagueTotalPlayers.Assists, eurocupTotalPlayers.Assists, bclTotalPlayers.Assists]},
    {heading: 'Blocks', data: [euroleagueTotalPlayers.Blocks, eurocupTotalPlayers.Blocks, bclTotalPlayers.Blocks]},
    {heading: 'Steals', data: [euroleagueTotalPlayers.Steals, eurocupTotalPlayers.Steals, bclTotalPlayers.Steals]},
    {
      heading: 'Two-pointers Made',
      data: [euroleagueTotalPlayers.TwoPointers, eurocupTotalPlayers.TwoPointers, bclTotalPlayers.TwoPointers]
    },
    {
      heading: 'Three-pointers Made',
      data: [euroleagueTotalPlayers.ThreePointers, eurocupTotalPlayers.ThreePointers, bclTotalPlayers.ThreePointers]
    },
    {
      heading: 'Free Throws Made',
      data: [euroleagueTotalPlayers.FreePointers, eurocupTotalPlayers.FreePointers, bclTotalPlayers.FreePointers]
    },
  ];

  averagePlayersStats: { heading: string; data: StatsModel[][] }[] = [
    {
      heading: 'Points',
      data: [euroleagueAveragePlayers.Points, eurocupAveragePlayers.Points, bclAveragePlayers.Points]
    },
    {
      heading: 'Rebounds',
      data: [euroleagueAveragePlayers.Rebounds, eurocupAveragePlayers.Rebounds, bclAveragePlayers.Rebounds]
    },
    {
      heading: 'Assists',
      data: [euroleagueAveragePlayers.Assists, eurocupAveragePlayers.Assists, bclAveragePlayers.Assists]
    },
    {
      heading: 'Blocks',
      data: [euroleagueAveragePlayers.Blocks, eurocupAveragePlayers.Blocks, bclAveragePlayers.Blocks]
    },
    {
      heading: 'Steals',
      data: [euroleagueAveragePlayers.Steals, eurocupAveragePlayers.Steals, bclAveragePlayers.Steals]
    },
    {
      heading: 'Two-pointers Made',
      data: [euroleagueAveragePlayers.TwoPointers, eurocupAveragePlayers.ThreePointers, bclAveragePlayers.TwoPointers]
    },
    {
      heading: 'Three-pointers Made',
      data: [euroleagueAveragePlayers.ThreePointers, eurocupAveragePlayers.ThreePointers, bclAveragePlayers.ThreePointers]
    },
    {
      heading: 'Free Throws Made',
      data: [euroleagueAveragePlayers.FreePointers, eurocupAveragePlayers.FreePointers, bclAveragePlayers.FreePointers]
    },
  ];

  totalTeamsStats: { heading: string; data: StatsModel[][] }[] = [
    {heading: 'Points', data: [euroleagueTotalTeams.Points, eurocupTotalTeams.Points, bclTotalTeams.Points]},
    {heading: 'Rebounds', data: [euroleagueTotalTeams.Rebounds, eurocupTotalTeams.Rebounds, bclTotalTeams.Rebounds]},
    {heading: 'Assists', data: [euroleagueTotalTeams.Assists, eurocupTotalTeams.Assists, bclTotalTeams.Assists]},
    {heading: 'Blocks', data: [euroleagueTotalTeams.Blocks, eurocupTotalTeams.Blocks, bclTotalTeams.Blocks]},
    {heading: 'Steals', data: [euroleagueTotalTeams.Steals, eurocupTotalTeams.Steals, bclTotalTeams.Steals]},
    {
      heading: 'Two-pointers Made',
      data: [euroleagueTotalTeams.TwoPointers, eurocupTotalTeams.TwoPointers, bclTotalTeams.TwoPointers]
    },
    {
      heading: 'Three-pointers Made',
      data: [euroleagueTotalTeams.ThreePointers, eurocupTotalTeams.ThreePointers, bclTotalTeams.ThreePointers]
    },
    {
      heading: 'Free Throws Made',
      data: [euroleagueTotalTeams.FreePointers, eurocupTotalTeams.FreePointers, bclTotalTeams.FreePointers]
    },
  ];

  averageTeamsStats: { heading: string; data: StatsModel[][] }[] = [
    {heading: 'Points', data: [euroleagueAverageTeams.Points, eurocupAverageTeams.Points, bclAverageTeams.Points]},
    {
      heading: 'Rebounds',
      data: [euroleagueAverageTeams.Rebounds, eurocupAverageTeams.Rebounds, bclAverageTeams.Rebounds]
    },
    {heading: 'Assists', data: [euroleagueAverageTeams.Assists, eurocupAverageTeams.Assists, bclAverageTeams.Assists]},
    {heading: 'Blocks', data: [euroleagueAverageTeams.Blocks, eurocupAverageTeams.Blocks, bclAverageTeams.Blocks]},
    {heading: 'Steals', data: [euroleagueAverageTeams.Steals, eurocupAverageTeams.Steals, bclAverageTeams.Steals]},
    {
      heading: 'Two-pointers Made',
      data: [euroleagueAverageTeams.TwoPointers, eurocupAverageTeams.TwoPointers, bclAverageTeams.TwoPointers]
    },
    {
      heading: 'Three-pointers Made',
      data: [euroleagueAverageTeams.ThreePointers, eurocupAverageTeams.ThreePointers, bclAverageTeams.ThreePointers]
    },
    {
      heading: 'Free Throws Made',
      data: [euroleagueAverageTeams.FreePointers, eurocupAverageTeams.FreePointers, bclAverageTeams.FreePointers]
    },
  ];
}
