import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NewsService} from "../../services/news.service";
import {Card} from "../../models/news-card.model";
import {Cards} from "../../models/news";


@Component({
  selector: 'app-news-latest',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './news-latest.component.html',
  styleUrl: './news-latest.component.scss'
})
export class NewsLatestComponent {
  latest: Card = Cards[0];

  constructor(private newsService: NewsService) {
  }

  goToLatest(url: string): void {
    this.newsService.goToNews(url);
  }
}
