import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from "@angular/material/tabs";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../../shared/components/header/header.component";
import {ShapeDividerComponent} from "../../../shared/components/shape-divider/shape-divider.component";
import {StandingsTabBCLComponent} from "../../components/standings-tab-bcl/standings-tab-bcl.component";
import {StandingsTabComponent} from "../../components/standings-tab/standings-tab.component";
import {StandingsACB} from "../../models/standings-acb";
import {StandingsBCLA} from "../../models/standings-bcl/standings-bclA";
import {StandingsBCLB} from "../../models/standings-bcl/standings-bclB";
import {StandingsBCLC} from "../../models/standings-bcl/standings-bclC";
import {StandingsBCLD} from "../../models/standings-bcl/standings-bclD";
import {StandingsBCLE} from "../../models/standings-bcl/standings-bclE";
import {StandingsBCLF} from "../../models/standings-bcl/standings-bclF";
import {StandingsBCLG} from "../../models/standings-bcl/standings-bclG";
import {StandingsBCLH} from "../../models/standings-bcl/standings-bclH";
import {StandingsBSL} from "../../models/standings-bsl";
import {StandingsEuroCupA} from "../../models/standings-eurocupA";
import {StandingsEuroCupB} from "../../models/standings-eurocupB";
import {StandingsEuroLeague} from "../../models/standings-euroleague";
import {StandingsLegaBasketA} from "../../models/standings-legabasketa";
import {StandingsModel} from "../../models/standings.model";

@Component({
  selector: 'app-standings-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatTabsModule, StandingsTabComponent, FooterComponent, MatSelectModule, MatFormFieldModule, StandingsTabBCLComponent, ShapeDividerComponent],
  templateUrl: './standings-page.component.html',
  styleUrl: './standings-page.component.scss'
})
export class StandingsPageComponent {
  selectedLeague: string = 'euroleague';
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
  protected readonly standingsLegaBasketA: StandingsModel[] = StandingsLegaBasketA;
  protected readonly standingsACB: StandingsModel[] = StandingsACB;
  protected readonly standingsBSL: StandingsModel[] = StandingsBSL;

}
