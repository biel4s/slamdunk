import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider} from 'firebase/auth'
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import {MatSnackBar} from "@angular/material/snack-bar";
import FirebaseError = firebase.FirebaseError;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverMessage: unknown;

  constructor(private router: Router, public afAuth: AngularFireAuth, private _snackBar: MatSnackBar) {
  }

  goToLoginPage(): void {
    this.router.navigate(['/login']).then();
  }


  async GoogleAuth(): Promise<void> {
    try {
      await this.afAuth.signInWithPopup(new GoogleAuthProvider())
      await this.router.navigate(['/']);
    } catch (error) {
      this.handleError(error);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string, confirmPassword: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      await this.router.navigate(['/']);
      this._snackBar.open("Logged in as" + email, "OK", {duration: 5000});
    } catch (error) {
      this.handleError(error);
    }
  }

  async registerWithEmailAndPassword(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.router.navigate(['/']);
      this._snackBar.open("Your account has been created successfully", "OK", {duration: 5000});
    } catch (error) {
      this.handleError(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      this.serverMessage = 'If your email address matches an existing account we will send a password reset email within a few minutes.';
    } catch (error) {
      this.handleError(error);
    }
  }

  isFirebaseError(error: unknown): error is FirebaseError {
    return (error as FirebaseError).code !== undefined;
  }

  handleError(error: unknown) {
    if (this.isFirebaseError(error)) {
      this.serverMessage = this.mapErrorMessages(error.code);
    } else {
      this.serverMessage = 'An unexpected error occurred.';
    }
  }

  mapErrorMessages(code: string): string {
    switch (code) {
      case "auth/invalid-login-credentials":
        return "Credentials are incorrect.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters."
      case "auth/user-not-found":
        return "No user found with this email address.";
      case "auth/missing-password":
        return "A non-empty password must be provided."
      case "auth/too-many-requests":
        return "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
      case "auth/email-already-in-use":
        return "The email address is already in use by another account."
      case "auth/missing-email":
        return "The email address is missing."
      default:
        return "An unexpected error occurred.";
    }
  }

  logout(): void {
    this.afAuth.signOut().then();
  }
}