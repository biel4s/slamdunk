import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {

}
