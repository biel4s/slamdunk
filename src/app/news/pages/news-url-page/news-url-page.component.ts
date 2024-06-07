import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {ActivatedRoute} from "@angular/router";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {ShapeDividerComponent} from "../../../shared/components/shape-divider/shape-divider.component";
import {Cards} from "../../models/news";
import {NewsCardModel} from "../../models/news-card.model";

@Component({
  selector: 'app-news-url-page',
  standalone: true,
  imports: [CommonModule, FooterComponent, MatButtonModule, NavbarComponent, MatCardModule, MatDividerModule, NgOptimizedImage, ShapeDividerComponent],
  templateUrl: './news-url-page.component.html',
  styleUrl: './news-url-page.component.scss'
})
export class NewsUrlPageComponent implements OnInit {
  newsData: NewsCardModel | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const url: string | null = this.route.snapshot.paramMap.get('url');
    this.newsData = Cards.find(card => card.url === url);
  }
}
