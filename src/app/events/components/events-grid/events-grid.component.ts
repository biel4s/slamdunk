import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-events-grid',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './events-grid.component.html',
  styleUrl: './events-grid.component.scss'
})
export class EventsGridComponent {

}
