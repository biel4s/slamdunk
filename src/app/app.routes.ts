import {LoginPageComponent} from './auth/login-page/login-page.component';
import {Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**', redirectTo: ''},
];
