import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatchModel} from "../../models/match.model";

@Component({
  selector: 'app-schedule-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './schedule-card.component.html',
  styleUrl: './schedule-card.component.scss'
})
export class ScheduleCardComponent {
  @Input() scheduleSource!: MatchModel;

}
