import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
