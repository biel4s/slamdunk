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
import {AuthService} from "../auth.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";


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
    MatSnackBarModule
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  isPasswordHidden: boolean = true;
  isLoading: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public authService: AuthService
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
    confirmPassword: ['']
  }, {validators: this.doesPasswordMatch});

  async onSubmit(): Promise<void> {
    this.isLoading = true;
    const email: any = this.email;
    const password: any = this.password;
    const confirmPassword: any = this.confirmPassword

    try {
      if (this.isLogin) {
        await this.authService.loginWithEmailAndPassword(email, password, confirmPassword);
        this.authForm.reset();
      }
      if (this.isRegister) {
        await this.authService.registerWithEmailAndPassword(email, password);
      }
      if (this.isPasswordReset) {
        await this.authService.resetPassword(email);
        this.authForm.reset();
      }
    } catch (error) {
      this.authService.handleError(error);
    }

    this.isLoading = false;
  }

  /* private doesPasswordMatch(Control1: string, Control2: string): ValidatorFn {
     return (control: AbstractControl): ValidationErrors | null => {
       const formGroup = control as FormGroup;
       const valueOfControl1 = formGroup.get(Control1)?.value;
       const valueOfControl2 = formGroup.get(Control2)?.value;

       if (valueOfControl1 === valueOfControl2) {
         return null
       } else {
         return {valuesDoNotMatch: true}
       }
     }
   }*/

}


