import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider} from 'firebase/auth'
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  type: 'login' | 'register' | 'reset' = 'login';

  constructor(private router: Router, public afAuth: AngularFireAuth, private _snackBar: MatSnackBar) {
  }

  setFormType(value: 'login' | 'register' | 'reset'): void {
    this.type = value;
  }

  goToLoginPage(): void {
    this.setFormType('login');
    this.router.navigate(['/login']).then();
    console.log(this.type);
  }

  goToRegisterPage(): void {
    this.setFormType('register');
    this.router.navigate(['/login']).then();
    console.log(this.type);
  }

  goToResetPage(): void {
    this.setFormType('reset');
    this.afAuth.signOut().then();
    this.router.navigate(['/login']).then();
  }

  async googleAuth(): Promise<void> {
    await this.afAuth.signInWithPopup(new GoogleAuthProvider())
    await this.router.navigate(['/']);
  }

  async loginWithEmailAndPassword(email: string, password: string): Promise<void> {
    await this.afAuth.signInWithEmailAndPassword(email, password);
    this._snackBar.open("Logged in as" + email, "OK", {duration: 5000});
  }

  async registerWithEmailAndPassword(email: string, password: string): Promise<void> {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    this._snackBar.open("Your account has been created successfully", "OK", {duration: 5000});
  }

  async resetPassword(email: string): Promise<void> {
    await this.afAuth.sendPasswordResetEmail(email);
  }

  async verifyEmail(): Promise<void> {
    const user: firebase.User | null = await this.afAuth.currentUser;
    if (user) {
      user.sendEmailVerification().then((): void => {
        this._snackBar.open("Email verification sent.", "OK", {duration: 5000});
      }).catch((error): void => {
        if (error.code === 'auth/too-many-requests') {
          this._snackBar.open("Too many requests!", "OK", {duration: 5000});
        } else {
          this._snackBar.open('Error sending verification email.', "OK", {duration: 5000});
        }
      })
    }
  }

  logout(): void {
    this.afAuth.signOut().then();
    this.afAuth.currentUser.then(user => {
      if (user) {
        const email: string | null = user.email;
        this._snackBar.open(`Logged out. Goodbye ${email}`, "OK", {duration: 5000});
      }
    });
    this.afAuth.signOut().then();
  }
}
