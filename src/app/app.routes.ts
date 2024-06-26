import {Routes} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {EventsPageComponent} from "./events/pages/events-page/events-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {NewsPageComponent} from "./news/pages/news-page/news-page.component";
import {NewsUrlPageComponent} from "./news/pages/news-url-page/news-url-page.component";
import {PlayersPageComponent} from "./players/players-page/players-page.component";
import {SchedulePageComponent} from "./schedule/schedule-page/schedule-page.component";
import {StandingsPageComponent} from "./standings/pages/standings-page/standings-page.component";
import {StatsPageComponent} from "./stats/stats-page/stats-page.component";
import {TeamsPageComponent} from "./teams/teams-page/teams-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'news/:url', component: NewsUrlPageComponent},
  {path: 'schedule', component: SchedulePageComponent},
  {path: 'stats', component: StatsPageComponent},
  {path: 'standings', component: StandingsPageComponent},
  {path: 'teams', component: TeamsPageComponent},
  {path: 'players', component: PlayersPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: '**', redirectTo: ''},
];
