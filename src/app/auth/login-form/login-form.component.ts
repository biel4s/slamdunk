import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  isPasswordHidden: boolean = true;
  type: 'login' | 'register' | 'reset' = 'login';
  isLoading: boolean = false;
  serverMessage: any;

  readonly authForm = this.fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', []]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    public authService: AuthService
  ) {
  }

  get isLogin(): boolean {
    return this.type === 'login';
  }

  get isRegister(): boolean {
    return this.type === 'register';
  }

  get isPasswordReset(): boolean {
    return this.type === 'reset';
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  get passwordConfirm() {
    return this.authForm.get('confirmPassword');
  }

  get passwordDoesMatch(): boolean {
    if (this.type !== 'register') {
      return true;
    } else {
      return this.password?.value === this.passwordConfirm?.value;
    }
  }

  changeType(value: 'login' | 'register' | 'reset'): void {
    this.type = value;
    this.serverMessage = '';
  }

  /*  mapErrorMessages(error: unknown): string {
      switch (error) {
        case "auth/weak-password":
          return "Password should be at least 6 characters"
        case "auth/invalid-email":
          return "The email address is badly formatted"
        default:
          return "Credentials are incorrect";
      }
    }*/

  async onSubmit(): Promise<void> {
    this.isLoading = true;

    /*    if (this.authForm.invalid) {
          {
            this.serverMessage = 'Credentials are incorrect';
          }
          return;
        }*/

    const email: any = this.email?.value;
    const password: any = this.password?.value;

    try {
      if (this.isLogin) {
        await this.authService.afAuth.signInWithEmailAndPassword(email, password);
        await this.router.navigate(['/'])
      }
      if (this.isRegister) {
        await this.authService.afAuth.createUserWithEmailAndPassword(email, password);
        await this.router.navigate(['/']);
      }
      if (this.isPasswordReset) {
        await this.authService.afAuth.sendPasswordResetEmail(email);
        this.serverMessage = 'Check your email';
      }
    } catch (error) {
      this.serverMessage = error;
    }

    this.authForm.reset();
    this.isLoading = false;
  }
}
