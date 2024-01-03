import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {TeamsCardComponent} from "../components/teams-card/teams-card.component";
import {TeamModel} from "../models/team.model";
import {TeamsEuroLeague} from "../models/euroleague";
import {TeamsEuroCup} from "../models/eurocup";
import {TeamsBCL} from "../models/bcl";
import {TeamsBSL} from "../models/bsl";
import {TeamsACB} from "../models/acb";
import {TeamsLegaBasketA} from "../models/lega-basket-a";

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, TeamsCardComponent],
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
