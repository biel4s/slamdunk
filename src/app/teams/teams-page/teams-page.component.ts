import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {TeamsCardComponent} from "../components/teams-card/teams-card.component";

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, TeamsCardComponent],
  templateUrl: './teams-page.component.html',
  styleUrl: './teams-page.component.scss'
})
export class TeamsPageComponent {
  selectedLeague: string = 'euroleague';
}
