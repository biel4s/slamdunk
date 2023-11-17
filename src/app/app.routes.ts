import {HomeComponent} from './home/home.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**', redirectTo: ''},
];
