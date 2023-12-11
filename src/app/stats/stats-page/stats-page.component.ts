import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {

}
