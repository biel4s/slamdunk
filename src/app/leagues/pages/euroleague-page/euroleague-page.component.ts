import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {FooterComponent} from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-euroleague-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './euroleague-page.component.html',
  styleUrl: './euroleague-page.component.scss'
})
export class EuroleaguePageComponent {

}
