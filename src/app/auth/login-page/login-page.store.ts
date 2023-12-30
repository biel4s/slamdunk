import {Injectable} from '@angular/core';
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {AuthService} from "../services/auth.service";
import {EMPTY, exhaustMap, from, tap} from "rxjs";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;


interface LoginPageState {
  isLoading: boolean;
  serverMessage: string | null;
  isPasswordHidden: boolean;
}

export interface Credentials {
  email: string;
  password: string;
  confirmPassword: string;
}


@Injectable()
export class LoginPageStore extends ComponentStore<LoginPageState> {

  readonly login = this.effect<Credentials>(credentials$ => {
    return credentials$.pipe(
      tap(() => this.patchState({isLoading: true, serverMessage: null})),
      exhaustMap(credentials =>
        from(this.authService.loginWithEmailAndPassword(credentials.email, credentials.password))
          .pipe(
            tapResponse({
              next: (): void => {
                this.router.navigate(['/']).then();
              },
              error: (error: unknown) => this.handleError(error),
              finalize: (): void => this.patchState({isLoading: false})
            })
          )
      ))
  })

  readonly register = this.effect<Credentials>(credentials$ => {
    return credentials$.pipe(
      tap(() => this.patchState({isLoading: true, serverMessage: null})),
      exhaustMap(credentials => {
        if (credentials.password !== credentials.confirmPassword) {
          this.patchState({serverMessage: "Passwords do not match."});
          return EMPTY;
        } else {
          return from(this.authService.registerWithEmailAndPassword(credentials.email, credentials.password))
            .pipe(
              tapResponse({
                next: (): void => {
                  this.router.navigate(['/']).then();
                },
                error: (error: unknown) => this.handleError(error),
                finalize: (): void => this.patchState({isLoading: false})
              })
            )
        }
      })
    )
  })
  
  readonly reset = this.effect<Credentials>(credentials$ => {
    return credentials$.pipe(
      tap(() => this.patchState({isLoading: true, serverMessage: null})),
      exhaustMap(credentials =>
        from(this.authService.resetPassword(credentials.email))
          .pipe(
            tapResponse({
              next: () => {
                this.patchState({serverMessage: 'If your email address matches an existing account we will send a password reset email within a few minutes.'})
              },
              error: (error: unknown) => this.handleError(error),
              finalize: () => this.patchState({isLoading: false})
            }),
          ),
      ),
    )
  });

  private readonly isLoading$ = this.select(state => state.isLoading);
  private serverMessage$ = this.select(state => state.serverMessage);
  private readonly isPasswordHidden$ = this.select(state => state.isPasswordHidden);

  readonly vm$ = this.select(
    {
      isLoading: this.isLoading$,
      serverMessage: this.serverMessage$,
      isPasswordHidden: this.isPasswordHidden$,
    },
    {debounce: true},
  )

  constructor(private readonly authService: AuthService, private router: Router
  ) {
    super({
      isLoading: false,
      serverMessage: null,
      isPasswordHidden: true
    });
  }

  togglePasswordVisibility():
    void {
    this.patchState(state => ({isPasswordHidden: !state.isPasswordHidden}));
  }

  isFirebaseError(error: unknown): error    is    FirebaseError {
    return (error as FirebaseError).code !== undefined;
  }

  handleError(error: unknown): void {
    let message: string;
    if (this.isFirebaseError(error)) {
      message = this.mapErrorMessages(error.code);
    } else {
      message = 'An unexpected error occurred.';
    }
    this.patchState({serverMessage: message});
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
      case "auth/passwords-dont-match":
        return "Passwords do not match."
      default:
        return "An unexpected error occurred.";
    }
  }
}
