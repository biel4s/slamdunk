import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
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
  isPasswordHidden: boolean = true;
  errorMessage: string = '';
  isSubmitted: boolean = false;

  readonly authForm = this.fb.nonNullable.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  goToRegisterPage(): void {
    this.router.navigate(['/register']);
  }

  onSubmit(): void {
    if (this.authForm.invalid) {
      {
        this.errorMessage = 'Credentials are incorrect';
      }
      return;
    }
    console.log(this.authForm);
    this.authForm.reset();
  }
}
