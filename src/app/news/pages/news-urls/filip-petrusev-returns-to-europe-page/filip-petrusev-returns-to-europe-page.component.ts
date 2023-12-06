import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../../../shared/components/header/header.component";
import {NewsUrlCardComponent} from "../../../components/news-url-card/news-url-card.component";

@Component({
  selector: 'app-filip-petrusev-returns-to-europe-page',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, NewsUrlCardComponent],
  templateUrl: './filip-petrusev-returns-to-europe-page.component.html',
  styleUrl: './filip-petrusev-returns-to-europe-page.component.scss'
})
export class FilipPetrusevReturnsToEuropePageComponent {

}
