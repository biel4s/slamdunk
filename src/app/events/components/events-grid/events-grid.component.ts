import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from "@angular/material/button";

export interface Tile {
  backgroundImage: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-events-grid',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './events-grid.component.html',
  styleUrl: './events-grid.component.scss'
})
export class EventsGridComponent {
  tiles: Tile[] = [
    {
      text: 'The global landscape of sports is ever-evolving.',
      cols: 2,
      rows: 2,
      backgroundImage: 'url("/assets/img/news.jpg")'
    },
    {
      text: 'The global landscape of sports is ever-evolving.',
      cols: 2,
      rows: 1,
      backgroundImage: 'url("/assets/img/news.jpg")'
    },
    {
      text: 'The global landscape of sports is ever-evolving.',
      cols: 1,
      rows: 1,
      backgroundImage: 'url("/assets/img/news.jpg")'
    },
    {
      text: 'The global landscape of sports is ever-evolving.',
      cols: 1,
      rows: 1,
      backgroundImage: 'url("/assets/img/news.jpg")'
    },
  ];
}
