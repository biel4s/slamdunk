import {provideHttpClient} from "@angular/common/http";
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {environment} from "../environments/environment";
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
      MatSnackBarModule
    ]),
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ]
};
