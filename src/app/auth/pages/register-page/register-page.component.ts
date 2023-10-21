import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  isPasswordHidden = true;

  readonly authForm = this.fb.nonNullable.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private readonly fb: FormBuilder) {}

  // getErrorMessage(): any {
  //   if (this.authForm.controls.login.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  // }

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }
    console.log(this.authForm.value);
    this.authForm.reset();
  }
}
