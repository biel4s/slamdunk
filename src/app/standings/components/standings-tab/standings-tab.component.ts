import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {StandingsModel} from "../../models/standings.model";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-standings-tab',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, NgOptimizedImage, MatSortModule],
  templateUrl: './standings-tab.component.html',
  styleUrl: './standings-tab.component.scss'
})
export class StandingsTabComponent {
  @Input() standingsSource!: StandingsModel[];
  dataSource!: MatTableDataSource<StandingsModel>;
  displayedColumns: string[] = ['position', 'team', 'wins', 'loses', 'winratio', 'home', 'away', 'last10'];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.standingsSource);
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`).then();
    } else {
      this._liveAnnouncer.announce('Sorting cleared').then();
    }
  }
}
