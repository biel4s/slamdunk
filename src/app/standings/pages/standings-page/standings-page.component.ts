import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {MatTabsModule} from "@angular/material/tabs";
import {StandingsTabComponent} from "../../components/standings-tab/standings-tab.component";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {StandingsEuroLeague} from "../../models/standings-euroleague";
import {StandingsModel} from "../../models/standings.model";
import {StandingsEuroCupA} from "../../models/standings-eurocupA";
import {StandingsEuroCupB} from "../../models/standings-eurocupB";
import {StandingsBCLA} from "../../models/standings-bcl/standings-bclA";
import {StandingsTabBCLComponent} from "../../components/standings-tab-bcl/standings-tab-bcl.component";
import {StandingsBCLB} from "../../models/standings-bcl/standings-bclB";
import {StandingsBCLC} from "../../models/standings-bcl/standings-bclC";
import {StandingsBCLH} from "../../models/standings-bcl/standings-bclH";
import {StandingsBCLG} from "../../models/standings-bcl/standings-bclG";
import {StandingsBCLF} from "../../models/standings-bcl/standings-bclF";
import {StandingsBCLE} from "../../models/standings-bcl/standings-bclE";
import {StandingsBCLD} from "../../models/standings-bcl/standings-bclD";

@Component({
  selector: 'app-standings-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatTabsModule, StandingsTabComponent, FooterComponent, MatSelectModule, MatFormFieldModule, StandingsTabBCLComponent],
  templateUrl: './standings-page.component.html',
  styleUrl: './standings-page.component.scss'
})
export class StandingsPageComponent {
  selectedLeague: string = 'bcl';
  protected readonly standingsEuroLeague: StandingsModel[] = StandingsEuroLeague;
  protected readonly standingsEuroCupA: StandingsModel[] = StandingsEuroCupA;
  protected readonly standingsEuroCupB: StandingsModel[] = StandingsEuroCupB;
  protected readonly standingsBCLA: StandingsModel[] = StandingsBCLA;
  protected readonly standingsBCLB: StandingsModel[] = StandingsBCLB;
  protected readonly standingsBCLC: StandingsModel[] = StandingsBCLC;
  protected readonly standingsBCLD: StandingsModel[] = StandingsBCLD;
  protected readonly standingsBCLE: StandingsModel[] = StandingsBCLE;
  protected readonly standingsBCLF: StandingsModel[] = StandingsBCLF;
  protected readonly standingsBCLG: StandingsModel[] = StandingsBCLG;
  protected readonly standingsBCLH: StandingsModel[] = StandingsBCLH;

}
