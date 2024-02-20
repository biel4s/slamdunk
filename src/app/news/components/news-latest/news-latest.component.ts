import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NewsService} from "../../services/news.service";
import {NewsCardModel} from "../../models/news-card.model";
import {Cards} from "../../models/news";


@Component({
  selector: 'app-news-latest',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './news-latest.component.html',
  styleUrl: './news-latest.component.scss'
})
export class NewsLatestComponent {
  latest: NewsCardModel = Cards[0];

  constructor(private newsService: NewsService) {
  }

  goToLatest(url: string): void {
    this.newsService.goToNews(url);
  }
}
