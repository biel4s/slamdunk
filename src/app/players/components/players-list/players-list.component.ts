import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss'
})
export class PlayersListComponent {

}
