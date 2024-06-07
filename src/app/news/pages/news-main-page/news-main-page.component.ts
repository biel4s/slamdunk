import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NewsCardComponent} from "../../components/news-card/news-card.component";
import {Cards} from "../../models/news";
import {NewsCardModel} from "../../models/news-card.model";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './news-main-page.component.html',
  styleUrl: './news-main-page.component.scss'
})

export class NewsMainPageComponent {
  cards: NewsCardModel[] = Cards;

  constructor(private newsService: NewsService) {
  }

  scrollToLeft(): void {
    const container: Element | null = document.querySelector('.cards-content');
    if (container !== null) {
      container.scrollBy({left: -410, behavior: 'smooth'});
    }
  }

  scrollToRight(): void {
    const container: Element | null = document.querySelector('.cards-content');
    if (container !== null) {
      container.scrollBy({left: 410, behavior: 'smooth'});
    }
  }

  goToUrl(url: string): void {
    this.newsService.goToNews(url);
  }
}
