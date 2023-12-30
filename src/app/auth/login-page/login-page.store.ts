import {Injectable} from '@angular/core';
import {ComponentStore} from "@ngrx/component-store";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {exhaustMap, tap} from "rxjs";

interface LoginPageState {
  isLoading: boolean;
  type: 'login' | 'register' | 'reset';
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
        this.authService
          .loginWithEmailAndPassword(credentials.email, credentials.password)
          .catch(error => {
            this.authService.handleError(error);
          })
      ))
  })

  readonly register = this.effect<Credentials>(credentials$ => {
    return credentials$.pipe(
      tap(() => this.patchState({isLoading: true, serverMessage: null})),
      exhaustMap(credentials =>
        this.authService
          .registerWithEmailAndPassword(credentials.email, credentials.password, credentials.confirmPassword)
          .catch(error => {
            this.authService.handleError(error);
          })
      ))
  })

  readonly reset = this.effect<Credentials>(credentials$ => {
    return credentials$.pipe(
      tap(() => this.patchState({isLoading: true, serverMessage: null})),
      exhaustMap(credentials =>
        this.authService
          .resetPassword(credentials.email)
          .catch(error => {
            this.authService.handleError(error);
          })
      ))
  })

  private readonly isLoading$ = this.select(state => state.isLoading);
  private readonly type$ = this.select(state => state.type);
  private readonly serverMessage$ = this.select(state => state.serverMessage);
  private readonly isPasswordHidden$ = this.select(state => state.isPasswordHidden);

  readonly vm$ = this.select(
    {
      isLoading: this.isLoading$,
      type: this.type$,
      serverMessage: this.serverMessage$,
      isPasswordHidden: this.isPasswordHidden$,
    },
    {debounce: true},
  )

  constructor(private authService: AuthService, private readonly router: Router) {
    super({
      isLoading: false,
      type: 'login',
      serverMessage: null,
      isPasswordHidden: true
    });
  }

  togglePasswordVisibility(): void {
    this.patchState(state => ({isPasswordHidden: !state.isPasswordHidden}));
  }
}
