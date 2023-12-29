import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsCardComponent} from "../news-card/news-card.component";
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Cards} from "../../models/news";
import {NewsCardModel} from "../../models/news-card.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, MatChipsModule, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})

export class NewsFeedComponent {
  selectedType: string | null = '';
  errorMessage: string = '';
  currentIndex: number = 6;
  cards: NewsCardModel[] = Cards;

  constructor(private newsService: NewsService, private _snackBar: MatSnackBar) {
  }

  changeType(value: string): void {
    if (value === "all") {
      this.selectedType = '';
    } else {
      this.selectedType = value;
    }
  }

  loadMore(): void {
    this.currentIndex += 3;
    if (this.currentIndex > this.cards.length) {
      this._snackBar.open("No more content available!", "OK", {duration: 5000});
      return;
    }
  }

  goToUrl(url: string): void {
    this.newsService.goToNews(url);
  }
}
