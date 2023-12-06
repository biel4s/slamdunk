import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
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
