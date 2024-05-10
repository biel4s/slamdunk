import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {StandingsModel} from "../../models/standings.model";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-standings-tab-bcl',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, NgOptimizedImage, MatSortModule],
  templateUrl: './standings-tab-bcl.component.html',
  styleUrl: './standings-tab-bcl.component.scss'
})
export class StandingsTabBCLComponent {
  @Input() standingsSource!: StandingsModel[];
  displayedColumns: string[] = ['position', 'team', 'wins', 'loses', 'winratio', 'last5', 'points'];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  }

  /*ngAfterViewInit() {
    this.standingsSource.sort = this.sort;
  }*/

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`).then();
    } else {
      this._liveAnnouncer.announce('Sorting cleared').then();
    }
  }
}
