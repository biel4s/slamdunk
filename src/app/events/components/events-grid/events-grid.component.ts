import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import {EventsModel} from "../../models/events.model";

@Component({
  selector: 'app-events-grid',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './events-grid.component.html',
  styleUrl: './events-grid.component.scss'
})
export class EventsGridComponent {
  readonly tileMainPage: EventsModel[] = [
    {
      name: "FIBA AmeriCup 2025 Qualifiers",
      background: "/assets/img/events/fibaamericup2025.png"
    },
    {
      name: "FIBA Basketball World Cup 2027 European Pre-Qualifiers",
      background: "/assets/img/events/fibaworldcup2027european.png"
    },
    {
      name: "FIBA EuroBasket 2025 Qualifiers",
      background: "/assets/img/events/fibaeurobasket2025.png"
    }
  ]
}
