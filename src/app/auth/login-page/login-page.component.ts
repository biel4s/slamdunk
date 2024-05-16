import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Credentials, LoginPageStore} from "./login-page.store";

@Component({
  selector: 'app-login-page',
  standalone: true,
  providers: [LoginPageStore],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  readonly vm$ = this.loginPageStore.vm$;
  readonly authForm = this.fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  constructor(private readonly fb: FormBuilder,
              private _snackBar: MatSnackBar,
              public authService: AuthService,
              private router: Router,
              public loginPageStore: LoginPageStore
  ) {
  }

  get isLogin(): boolean {
    return this.authService.type === 'login';
  }

  get isRegister(): boolean {
    return this.authService.type === 'register';
  }

  get isReset(): boolean {
    return this.authService.type === 'reset';
  }

  get email() {
    return this.authForm.value.email;
  }

  get password() {
    return this.authForm.value.password;
  }

  get confirmPassword() {
    return this.authForm.value.confirmPassword;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']).then();
  }

  togglePasswordVisibility(): void {
    this.loginPageStore.togglePasswordVisibility();
  }

  onSubmit(): void {
    const credentials: Credentials = this.authForm.getRawValue();

    if (this.isLogin) {
      this.loginPageStore.login(credentials);
    }
    if (this.isRegister) {
      this.loginPageStore.register(credentials);
    }
    if (this.isReset) {
      this.loginPageStore.reset(credentials);
    }
  };
}
