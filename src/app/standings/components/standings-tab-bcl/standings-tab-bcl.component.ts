import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {StandingsModel} from "../../models/standings.model";

@Component({
  selector: 'app-standings-tab-bcl',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, NgOptimizedImage],
  templateUrl: './standings-tab-bcl.component.html',
  styleUrl: './standings-tab-bcl.component.scss'
})
export class StandingsTabBCLComponent {
  @Input() standingsSource!: StandingsModel[];
  displayedColumns: string[] = ['position', 'team', 'wins', 'loses', 'winratio', 'last5', 'points'];

}
