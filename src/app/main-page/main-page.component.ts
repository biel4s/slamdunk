import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {StandingsComponent} from "./standings/standings.component";
import {NewsPageComponent} from "./news/pages/news-page.component";
import {EventsPageComponent} from "./events/pages/events-page/events-page.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HomeComponent, StandingsComponent, NewsPageComponent, EventsPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
