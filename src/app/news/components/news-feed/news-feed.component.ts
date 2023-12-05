import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsCardComponent} from "../news-card/news-card.component";
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Cards} from "./news";
import {Card} from "../news-card/news-card.model";

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, MatChipsModule, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})

export class NewsFeedComponent {
  selectedType: string | null = '';
  cards: Card[] = Cards;


  changeType(value: string) {
    if (value === "all") {
      this.selectedType = '';
    } else {
      this.selectedType = value;
    }
  }
}
