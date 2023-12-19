import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-events-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './events-card.component.html',
  styleUrl: './events-card.component.scss'
})
export class EventsCardComponent {

}
