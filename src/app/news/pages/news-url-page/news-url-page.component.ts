import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {MatButtonModule} from "@angular/material/button";
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {MatCardModule} from "@angular/material/card";
import {NewsCardModel} from "../../models/news-card.model";
import {ActivatedRoute} from "@angular/router";
import {Cards} from "../../models/news";
import {MatDividerModule} from "@angular/material/divider";
import {ShapeDividerComponent} from "../../../shared/components/shape-divider/shape-divider.component";

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
