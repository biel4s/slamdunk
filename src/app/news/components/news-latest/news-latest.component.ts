import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NewsService} from "../../services/news.service";
import {Card} from "../news-card/news-card.model";
import {Latest} from "./latest";


@Component({
  selector: 'app-news-latest',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './news-latest.component.html',
  styleUrl: './news-latest.component.scss'
})
export class NewsLatestComponent {
  latest: Card = Latest;

  constructor(private newsService: NewsService) {
  }

  goToLatest(url: string): void {
    this.newsService.goToNews(url);
  }
}
