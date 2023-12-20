import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSortModule} from "@angular/material/sort";
import {PlayersModel} from "../../models/players.model";

@Component({
  selector: 'app-players-tab',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, MatSortModule],
  templateUrl: './players-tab.component.html',
  styleUrl: './players-tab.component.scss'
})
export class PlayersTabComponent {
  @Input() playersSource!: MatTableDataSource<PlayersModel>;
  displayedColumns: string[] = ['name', 'team', 'position', 'age', 'height', 'nationality'];
}
