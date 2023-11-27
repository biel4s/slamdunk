import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

export interface StandingsElement {
  position: number;
  team: string;
  wins: number;
  loses: number;
  winratio: number;
  home: string;
  away: string;
  last10: string;
}

const STANDINGS_DATA: StandingsElement[] = [
  {position: 1, team: 'Real Madrid', wins: 9, loses: 0, winratio: 100, home: '6-0', away: '3-0', last10: '9-0'},
  {position: 2, team: 'FC Barcelona', wins: 8, loses: 2, winratio: 80, home: '5-0', away: '3-2', last10: '8-2'},
  {
    position: 3,
    team: 'Virtus Segafredo Bologna',
    wins: 7,
    loses: 3,
    winratio: 70,
    home: '5-1',
    away: '2-2',
    last10: '7-3'
  },
  {
    position: 4,
    team: 'Panathinaikos AKTOR Athens',
    wins: 6,
    loses: 4,
    winratio: 60,
    home: '5-2',
    away: '1-2',
    last10: '6-4'
  },
  {position: 5, team: 'Olympiacos Piraeus', wins: 6, loses: 4, winratio: 60, home: '4-2', away: '2-2', last10: '6-4'},
  {position: 6, team: 'AS Monaco', wins: 6, loses: 4, winratio: 60, home: '3-2', away: '3-2', last10: '6-4'},
  {
    position: 7,
    team: 'Maccabi Playtika Tel Aviv',
    wins: 5,
    loses: 4,
    winratio: 50,
    home: '3-2',
    away: '2-2',
    last10: '5-4'
  },
  {
    position: 8,
    team: 'Baskonia Vitoria-Gasteiz',
    wins: 5,
    loses: 5,
    winratio: 50,
    home: '2-4',
    away: '3-1',
    last10: '5-5'
  },
  {
    position: 9,
    team: 'Fenerbahce Beko Istanbul',
    wins: 5,
    loses: 5,
    winratio: 50,
    home: '4-0',
    away: '1-5',
    last10: '5-5'
  },
  {position: 10, team: 'Valencia Basket', wins: 5, loses: 5, winratio: 50, home: '4-1', away: '1-4', last10: '5-5'},
];

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss'
})
export class StandingsComponent {
  displayedColumns: string[] = ['position', 'team', 'wins', 'loses', 'winratio', 'home', 'away', 'last10'];
  dataSource: StandingsElement[] = STANDINGS_DATA;
}
