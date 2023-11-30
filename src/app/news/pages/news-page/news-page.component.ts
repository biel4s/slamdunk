import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
