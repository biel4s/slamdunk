import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsCardComponent} from "../components/news-card/news-card.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, MatIconModule, MatButtonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  scrollToLeft() {

  }

  scrollToRight() {

  }
}
