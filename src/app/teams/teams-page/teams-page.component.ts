import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";
import {ShapeDividerComponent} from "../../shared/components/shape-divider/shape-divider.component";
import {TeamsCardComponent} from "../components/teams-card/teams-card.component";
import {TeamsACB} from "../models/acb";
import {TeamsBCL} from "../models/bcl";
import {TeamsBSL} from "../models/bsl";
import {TeamsEuroCup} from "../models/eurocup";
import {TeamsEuroLeague} from "../models/euroleague";
import {TeamsLegaBasketA} from "../models/lega-basket-a";
import {TeamModel} from "../models/team.model";

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, TeamsCardComponent, ShapeDividerComponent],
  templateUrl: './teams-page.component.html',
  styleUrl: './teams-page.component.scss'
})
export class TeamsPageComponent {
  selectedLeague: string = 'euroleague';

  protected readonly teamsEuroleague: TeamModel[] = TeamsEuroLeague;
  protected readonly teamsEuroCup: TeamModel[] = TeamsEuroCup;
  protected readonly teamsBCL: TeamModel[] = TeamsBCL;
  protected readonly teamsACB: TeamModel[] = TeamsACB;
  protected readonly teamsBSL: TeamModel[] = TeamsBSL;
  protected readonly teamsLegaBasketA: TeamModel[] = TeamsLegaBasketA;

  getTeamsArray(league: string): TeamModel[] {
    switch (league) {
      case 'euroleague':
        return this.teamsEuroleague;
      case 'eurocup':
        return this.teamsEuroCup;
      case 'bcl':
        return this.teamsBCL;
      case 'acb':
        return this.teamsACB;
      case 'bsl':
        return this.teamsBSL;
      case 'lega basket a':
        return this.teamsLegaBasketA;
      default:
        return [];
    }
  }

}
