import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from "../home/home-page/home-page.component";
import {StandingsMainPageComponent} from "../standings/pages/standings-main-page/standings-main-page.component";
import {NewsMainPageComponent} from "../news/pages/news-main-page/news-main-page.component";
import {EventsMainPageComponent} from "../events/pages/events-main-page/events-main-page.component";
import {FooterComponent} from "../shared/components/footer/footer.component";
import {NavbarComponent} from "../shared/components/header/header.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HomePageComponent, StandingsMainPageComponent, NewsMainPageComponent, EventsMainPageComponent, FooterComponent, NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
