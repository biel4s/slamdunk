import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from "../home/pages/home-page.component";
import {StandingsPageComponent} from "../standings/pages/standings-page.component";
import {NewsPageComponent} from "../news/pages/news-page.component";
import {EventsPageComponent} from "../events/pages/events-page/events-page.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HomePageComponent, StandingsPageComponent, NewsPageComponent, EventsPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
