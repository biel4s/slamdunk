import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from '@angular/material/divider';
import {NewsCardModel} from "../../models/news-card.model";

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule, NgOptimizedImage],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() cardSource!: NewsCardModel;

}
