import {LoginPageComponent} from './auth/login-page/login-page.component';
import {Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {NewsPageComponent} from "./news/pages/news-page/news-page.component";
import {EventsPageComponent} from "./events/pages/events-page/events-page.component";
import {PlayersPageComponent} from "./players/players-page/players-page.component";
import {TeamsPageComponent} from "./teams/teams-page/teams-page.component";
import {StandingsPageComponent} from "./standings/pages/standings-page/standings-page.component";
import {EuroleaguePageComponent} from "./leagues/pages/euroleague-page/euroleague-page.component";
import {
  FilipPetrusevReturnsToEuropePageComponent
} from "./news/pages/news-urls/filip-petrusev-returns-to-europe-page/filip-petrusev-returns-to-europe-page.component";
import {EurocupPageComponent} from "./leagues/pages/eurocup-page/eurocup-page.component";
import {LegabasketaPageComponent} from "./leagues/pages/legabasketa-page/legabasketa-page.component";
import {BslPageComponent} from "./leagues/pages/bsl-page/bsl-page.component";
import {AcbPageComponent} from "./leagues/pages/acb-page/acb-page.component";
import {BclPageComponent} from "./leagues/pages/bcl-page/bcl-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'leagues/euroleague', component: EuroleaguePageComponent},
  {path: 'leagues/eurocup', component: EurocupPageComponent},
  {path: 'leagues/bcl', component: BclPageComponent},
  {path: 'leagues/acb', component: AcbPageComponent},
  {path: 'leagues/bsl', component: BslPageComponent},
  {path: 'leagues/legabasketa', component: LegabasketaPageComponent},
  {path: 'standings', component: StandingsPageComponent},
  {path: 'teams', component: TeamsPageComponent},
  {path: 'players', component: PlayersPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'news/filip-petrusev-returns-to-europe', component: FilipPetrusevReturnsToEuropePageComponent},
  {path: '**', redirectTo: ''},
];
