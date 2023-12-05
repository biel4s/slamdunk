import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsCardComponent} from "../news-card/news-card.component";
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, MatChipsModule, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {
  selectedOption: string = 'article';

  changeType(type: 'article' | 'trending' | 'awards' | 'stats') {
    this.selectedOption = type;
    console.log(this.selectedOption);
  }
}
