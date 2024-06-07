import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {ShapeDividerComponent} from "../../../shared/components/shape-divider/shape-divider.component";
import {NewsFeedComponent} from "../../components/news-feed/news-feed.component";
import {NewsLatestComponent} from "../../components/news-latest/news-latest.component";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatDividerModule, NewsLatestComponent, NewsFeedComponent, ShapeDividerComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
