import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {StandingsComponent} from "./standings/standings.component";
import {NewsPageComponent} from "./news/pages/news-page.component";
import {EventsComponent} from "./events/events.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HomeComponent, StandingsComponent, NewsPageComponent, EventsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
