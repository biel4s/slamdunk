import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {PlayersModel} from "../../models/players.model";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-players-tab',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, MatSortModule, NgOptimizedImage],
  templateUrl: './players-tab.component.html',
  styleUrl: './players-tab.component.scss'
})
export class PlayersTabComponent {
  @Input() playersSource!: MatTableDataSource<PlayersModel>;
  displayedColumns: string[] = ['name', 'team', 'position', 'age', 'height', 'country'];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  }

  ngAfterViewInit() {
    this.playersSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`).then();
    } else {
      this._liveAnnouncer.announce('Sorting cleared').then();
    }
  }
}
