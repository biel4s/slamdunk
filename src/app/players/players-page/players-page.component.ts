import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {PlayersListComponent} from "../components/players-list/players-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [MatIconModule, MatInputModule, FormsModule, CommonModule, NavbarComponent, FooterComponent, PlayersListComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, MatPaginatorModule],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss'
})
export class PlayersPageComponent {
  selectedLeague: string = 'euroleague';
}
