import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {MatTabsModule} from "@angular/material/tabs";
import {StandingsTabComponent} from "../../components/standings-tab/standings-tab.component";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {StandingsEuroLeague} from "../../models/standings";
import {StandingsModel} from "../../models/standings.model";

@Component({
  selector: 'app-standings-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatTabsModule, StandingsTabComponent, FooterComponent, MatSelectModule, MatFormFieldModule],
  templateUrl: './standings-page.component.html',
  styleUrl: './standings-page.component.scss'
})
export class StandingsPageComponent {
  selectedLeague: string = 'euroleague';
  protected readonly standingsData: StandingsModel[] = StandingsEuroLeague;
}
