import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider} from 'firebase/auth'
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, public afAuth: AngularFireAuth) {
  }

  goToLoginPage(): void {
    this.router.navigate(['/login']).then();
  }

  GoogleAuth(): void {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then(
      () => {
        this.router.navigate(['/']).then();
      },
      error => {
        console.error(error);
      }
    );
  }

  logout(): void {
    this.afAuth.signOut().then();
  }
}
