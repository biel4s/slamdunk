import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {
  }

  goToHome(): void {
    if (this.router.url === '/home') {
      document.getElementById("home-page")?.scrollIntoView({behavior: 'smooth'});
    } else {
      this.router.navigate(["/home"]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }
}
