import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {

}
