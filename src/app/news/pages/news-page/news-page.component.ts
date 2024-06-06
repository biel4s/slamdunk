import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {MatDividerModule} from "@angular/material/divider";
import {NewsLatestComponent} from "../../components/news-latest/news-latest.component";
import {NewsFeedComponent} from "../../components/news-feed/news-feed.component";
import {ShapeDividerComponent} from "../../../shared/components/shape-divider/shape-divider.component";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatDividerModule, NewsLatestComponent, NewsFeedComponent, ShapeDividerComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
