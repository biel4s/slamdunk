import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NewsComponent} from "./news/news.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HomeComponent, AboutComponent, NewsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
