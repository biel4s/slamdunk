import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
