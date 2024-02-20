import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {StandingsModel} from "../../models/standings.model";

@Component({
  selector: 'app-standings-tab',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, NgOptimizedImage],
  templateUrl: './standings-tab.component.html',
  styleUrl: './standings-tab.component.scss'
})
export class StandingsTabComponent {
  @Input() standingsSource!: StandingsModel[];
  displayedColumns: string[] = ['position', 'team', 'wins', 'loses', 'winratio', 'home', 'away', 'last10'];

}
