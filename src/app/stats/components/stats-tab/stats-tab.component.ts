import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {StatsModel} from "../../models/stats.model";

@Component({
  selector: 'app-stats-tab',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './stats-tab.component.html',
  styleUrl: './stats-tab.component.scss'
})
export class StatsTabComponent {
  @Input() statsSource!: StatsModel[]
  @Input() heading!: string;
  displayedColumns: string[] = ['position', 'name', 'score'];
}
