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
import * as eurocupTotalPlayers from "../models/players/eurocup/totalStatsPlayers";
import * as eurocupAveragePlayers from "../models/players/eurocup/averageStatsPlayers";
import * as euroleagueTotalTeams from "../models/teams/euroleague/totalStatsTeams";
import * as euroleagueAverageTeams from "../models/teams/euroleague/averageStatsTeams";

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
    'eurocup': 1
  }

  totalPlayersStats: { heading: string; data: StatsModel[][] }[] = [
    {heading: 'Points', data: [euroleagueTotalPlayers.Points, eurocupTotalPlayers.Points]},
    {heading: 'Rebounds', data: [euroleagueTotalPlayers.Rebounds, eurocupTotalPlayers.Rebounds]},
    {heading: 'Assists', data: [euroleagueTotalPlayers.Assists, eurocupTotalPlayers.Assists]},
    {heading: 'Blocks', data: [euroleagueTotalPlayers.Blocks, eurocupTotalPlayers.Blocks]},
    {heading: 'Steals', data: [euroleagueTotalPlayers.Steals, eurocupTotalPlayers.Steals]},
    {heading: 'Two-pointers Made', data: [euroleagueTotalPlayers.TwoPointers, eurocupTotalPlayers.TwoPointers]},
    {heading: 'Three-pointers Made', data: [euroleagueTotalPlayers.ThreePointers, eurocupTotalPlayers.ThreePointers]},
    {heading: 'Free Throws Made', data: [euroleagueTotalPlayers.FreePointers, eurocupTotalPlayers.FreePointers]},
  ];

  averagePlayersStats: { heading: string; data: StatsModel[][] }[] = [
    {heading: 'Points', data: [euroleagueAveragePlayers.Points, eurocupAveragePlayers.Points]},
    {heading: 'Rebounds', data: [euroleagueAveragePlayers.Rebounds, eurocupAveragePlayers.Rebounds]},
    {heading: 'Assists', data: [euroleagueAveragePlayers.Assists, eurocupAveragePlayers.Assists]},
    {heading: 'Blocks', data: [euroleagueAveragePlayers.Blocks, eurocupAveragePlayers.Blocks]},
    {heading: 'Steals', data: [euroleagueAveragePlayers.Steals, eurocupAveragePlayers.Steals]},
    {heading: 'Two-pointers Made', data: [euroleagueAveragePlayers.TwoPointers, eurocupAveragePlayers.ThreePointers]},
    {
      heading: 'Three-pointers Made',
      data: [euroleagueAveragePlayers.ThreePointers, eurocupAveragePlayers.ThreePointers]
    },
    {heading: 'Free Throws Made', data: [euroleagueAveragePlayers.FreePointers, eurocupAveragePlayers.FreePointers]},
  ];

  totalTeamsStats: { heading: string; data: StatsModel[][] }[] = [
    {heading: 'Points', data: [euroleagueTotalTeams.Points]},
    {heading: 'Rebounds', data: [euroleagueTotalTeams.Rebounds]},
    {heading: 'Assists', data: [euroleagueTotalTeams.Assists]},
    {heading: 'Blocks', data: [euroleagueTotalTeams.Blocks]},
    {heading: 'Steals', data: [euroleagueTotalTeams.Steals]},
    {heading: 'Two-pointers Made', data: [euroleagueTotalTeams.TwoPointers]},
    {heading: 'Three-pointers Made', data: [euroleagueTotalTeams.ThreePointers]},
    {heading: 'Free Throws Made', data: [euroleagueTotalTeams.FreePointers]},
  ];

  averageTeamsStats: { heading: string; data: StatsModel[][] }[] = [
    {heading: 'Points', data: [euroleagueAverageTeams.Points]},
    {heading: 'Rebounds', data: [euroleagueAverageTeams.Rebounds]},
    {heading: 'Assists', data: [euroleagueAverageTeams.Assists]},
    {heading: 'Blocks', data: [euroleagueAverageTeams.Blocks]},
    {heading: 'Steals', data: [euroleagueAverageTeams.Steals]},
    {heading: 'Two-pointers Made', data: [euroleagueAverageTeams.TwoPointers]},
    {
      heading: 'Three-pointers Made',
      data: [euroleagueAverageTeams.ThreePointers]
    },
    {heading: 'Free Throws Made', data: [euroleagueAverageTeams.FreePointers]},
  ];
}
