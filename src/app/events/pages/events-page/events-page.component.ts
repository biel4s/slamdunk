import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ScheduleCardComponent} from "../../../schedule/components/schedule-card/schedule-card.component";
import {EventsCardComponent} from "../../components/events-card/events-card.component";
import {EventsModel} from "../../models/events.model";
import {EventsData2024} from '../../models/events-2024'
import {EventsData2025} from '../../models/events-2025'
import {EventsData2026} from '../../models/events-2026'
import {EventsData2027} from '../../models/events-2027'

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, MatButtonModule, ScheduleCardComponent, EventsCardComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {
  selectedYear: string = '2024';
  months: string[] = ['February', 'June', 'July', 'August', 'November'];
  protected readonly EventsData2024: { [month: string]: EventsModel[] } = EventsData2024;
  protected readonly EventsData2025: { [month: string]: EventsModel[] } = EventsData2025;
  protected readonly EventsData2026: { [month: string]: EventsModel[] } = EventsData2026;
  protected readonly EventsData2027: { [month: string]: EventsModel[] } = EventsData2027;

  ngOnInit(): void {
    const yearData: { [month: string]: EventsModel[] } = this.getEventsYear(this.selectedYear);
    this.months = Object.keys(yearData).sort((a: string, b: string) => {
      return this.months.indexOf(a) - this.months.indexOf(b);
    });
  }

  getEventsYear(year: string): { [month: string]: EventsModel[] } {
    switch (year) {
      case '2024':
        return this.EventsData2024
      case '2025':
        return this.EventsData2025
      case '2026':
        return this.EventsData2026
      case '2027':
        return this.EventsData2027
      default:
        return {};
    }
  }
}
