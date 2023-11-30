import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {EventsCardComponent} from "../../components/events-card/events-card.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, EventsCardComponent, RouterLink],
  templateUrl: './events-main-page.component.html',
  styleUrl: './events-main-page.component.scss'
})
export class EventsMainPageComponent {
}
