import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private router: Router) {
  }

  goToNews(url: string): void {
    this.router.navigateByUrl('/news/' + url).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
