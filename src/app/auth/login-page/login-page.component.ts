import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
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

  constructor(private readonly fb: FormBuilder,
              private _snackBar: MatSnackBar,
              public authService: AuthService,
              private router: Router,
              private readonly loginPageStore: LoginPageStore
  ) {
  }

  get isLogin(): boolean {
    return this.authService.type === 'login';
  }

  get isRegister(): boolean {
    return this.authService.type === 'register';
  }

  get isPasswordReset(): boolean {
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

  doesPasswordMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password?.value != confirmPassword?.value
    ) {
      return {
        passwordMatchError: true,
      }
    }
    return null;
  }

  readonly authForm = this.fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {validators: this.doesPasswordMatch});

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']).then();
  }

  togglePasswordVisibility(): void {
    this.loginPageStore.togglePasswordVisibility();
  }

  async onSubmit(): Promise<void> {
    this.loginPageStore.patchState({
      isLoading: true,
    })
    const email: any = this.email;
    const password: any = this.password;
    const confirmPassword: any = this.confirmPassword

    const credentials: Credentials = this.authForm.getRawValue();

    if (this.isLogin) {
      this.loginPageStore.login(credentials);
    }

    if (this.isRegister) {
      if (this.authForm.invalid && password !== confirmPassword) {
        this.authService.serverMessage = "Passwords do not match!";
        return;
      }
      this.loginPageStore.register(credentials);
    }

    if (this.isPasswordReset) {
      try {
        await this.authService.resetPassword(email);
        this.authForm.reset();
      } catch (error) {
        this.authService.handleError(error);
      }
    }
    this.loginPageStore.patchState({
      isLoading: false,
    })
  }
}
