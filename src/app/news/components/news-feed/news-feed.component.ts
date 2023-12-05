import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsCardComponent} from "../news-card/news-card.component";
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Cards} from "./news";
import {Card} from "../news-card/news-card.model";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  cards: Card[] = Cards;

  constructor(private _snackBar: MatSnackBar) {
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
    if (this.currentIndex > 12) {
      this._snackBar.open("No more content available!", "OK", {duration: 5000});
      return;
    }
  }
}
