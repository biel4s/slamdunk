import {CommonModule} from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatTableDataSource} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {EventsCardComponent} from "../../events/components/events-card/events-card.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";
import {ShapeDividerComponent} from "../../shared/components/shape-divider/shape-divider.component";
import {PlayersTabComponent} from "../components/players-tab/players-tab.component";
import {PlayersACB} from "../models/players-acb";
import {PlayersBCL} from "../models/players-bcl";
import {PlayersBSL} from "../models/players-bsl";
import {PlayersEuroCup} from "../models/players-eurocup";
import {PlayersEuroLeague} from "../models/players-euroleague";
import {PlayersLegaBasketA} from "../models/players-legabasketa";
import {PlayersModel} from "../models/players.model";


@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [MatIconModule, MatInputModule, FormsModule, CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, MatPaginatorModule, PlayersTabComponent, EventsCardComponent, MatTabsModule, ShapeDividerComponent],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss'
})
export class PlayersPageComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedLeague: string = 'euroleague';
  playersEuroLeague: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersEuroLeague);
  playersEuroCup: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersEuroCup);
  playersBCL: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersBCL);
  playersACB: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersACB);
  playersBSL: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersBSL);
  playersLegaBasketA: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersLegaBasketA);

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Players per page:";
    this.playersEuroLeague.paginator = this.paginator;
    this.playersEuroCup.paginator = this.paginator;
    this.playersBCL.paginator = this.paginator;
    this.playersACB.paginator = this.paginator;
    this.playersBSL.paginator = this.paginator;
    this.playersLegaBasketA.paginator = this.paginator;
  }

  resetPaginator(): void {
    this.paginator.firstPage();
  }

  filterSearch(e: KeyboardEvent): void {
    const league: string = this.selectedLeague;
    const leagueSource: MatTableDataSource<PlayersModel> = this.getCurrentLeague(league);
    leagueSource.filter = (e.target as HTMLInputElement).value;
  }

  getCurrentLeague(league: string): MatTableDataSource<PlayersModel> {
    switch (league) {
      case 'euroleague':
        return this.playersEuroLeague;
      case 'eurocup':
        return this.playersEuroCup;
      case 'bcl':
        return this.playersBCL;
      case 'acb':
        return this.playersACB;
      case 'bsl':
        return this.playersBSL;
      case 'lega basket a':
        return this.playersLegaBasketA;
      default:
        return new MatTableDataSource<PlayersModel>([]);
    }
  }

}
