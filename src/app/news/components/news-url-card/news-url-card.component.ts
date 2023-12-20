import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NewsCardModel} from "../../models/news-card.model";
import {Cards} from "../../models/news";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-news-url-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './news-url-card.component.html',
  styleUrl: './news-url-card.component.scss'
})
export class NewsUrlCardComponent {
  latest: NewsCardModel = Cards[0];
}
