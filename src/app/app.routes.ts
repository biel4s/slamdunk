import {LoginPageComponent} from './auth/login-page/login-page.component';
import {Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {NewsPageComponent} from "./news/pages/news-page/news-page.component";
import {AboutPageComponent} from "./about/about-page/about-page.component";
import {EventsPageComponent} from "./events/pages/events-page/events-page.component";
import {PlayersPageComponent} from "./players/players-page/players-page.component";
import {TeamsPageComponent} from "./teams/teams-page/teams-page.component";
import {StandingsPageComponent} from "./standings/pages/standings-page/standings-page.component";
import {LeaguesPageComponent} from "./leagues/leagues-page/leagues-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'leagues/euroleague', component: LeaguesPageComponent},
  {path: 'standings', component: StandingsPageComponent},
  {path: 'teams', component: TeamsPageComponent},
  {path: 'players', component: PlayersPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', redirectTo: ''},
];
