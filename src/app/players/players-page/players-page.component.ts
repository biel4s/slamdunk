import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {PlayersTabComponent} from "../components/players-tab/players-tab.component";
import {PlayersEuroLeague} from "../models/players-euroleague";
import {MatTableDataSource} from "@angular/material/table";
import {PlayersModel} from "../models/players.model";
import {PlayersEuroCup} from "../models/players-eurocup";
import {EventsCardComponent} from "../../events/components/events-card/events-card.component";
import {PlayersBCL} from "../models/players-bcl";


@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [MatIconModule, MatInputModule, FormsModule, CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, MatPaginatorModule, PlayersTabComponent, EventsCardComponent],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss'
})
export class PlayersPageComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedLeague: string = 'euroleague';
  playersEuroLeague: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersEuroLeague);
  playersEuroCup: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersEuroCup);
  playersBCL: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersBCL);


  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Players per page:";
    this.playersEuroLeague.paginator = this.paginator;
    this.playersEuroCup.paginator = this.paginator;
    this.playersBCL.paginator = this.paginator;
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
      default:
        return new MatTableDataSource<PlayersModel>([]);
    }
  }

}
