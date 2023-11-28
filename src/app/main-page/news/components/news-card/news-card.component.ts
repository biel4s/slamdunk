import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {

}