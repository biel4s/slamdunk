import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-leagues-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './leagues-page.component.html',
  styleUrl: './leagues-page.component.scss'
})
export class LeaguesPageComponent {

}
