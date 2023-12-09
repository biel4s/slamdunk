import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {StandingsElement} from "../../models/standings-element.model";

@Component({
  selector: 'app-standings-tab',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule],
  templateUrl: './standings-tab.component.html',
  styleUrl: './standings-tab.component.scss'
})
export class StandingsTabComponent {
  @Input() dataSource: StandingsElement[];
  displayedColumns: string[] = ['position', 'team', 'wins', 'loses', 'winratio', 'home', 'away', 'last10'];

  constructor() {
    this.dataSource = [];
  }
}
