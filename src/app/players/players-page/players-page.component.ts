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
import {PlayersData} from "../models/players";
import {MatTableDataSource} from "@angular/material/table";
import {PlayersModel} from "../models/players.model";


@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [MatIconModule, MatInputModule, FormsModule, CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, MatPaginatorModule, PlayersTabComponent],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss'
})
export class PlayersPageComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedLeague: string = 'euroleague';
  playersSource: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersData);

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Players per page:";
    this.playersSource.paginator = this.paginator;
  }

  filterSearch(e: KeyboardEvent): void {
    this.playersSource.filter = (e.target as HTMLInputElement).value;
  }
}
