import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"slamdunk-1ad93","appId":"1:463391882685:web:ffd804dc8e15fb8d6a66d4","storageBucket":"slamdunk-1ad93.appspot.com","apiKey":"AIzaSyBNeHdhqTE8m5_HIm1fx15ffemg7K_nZFE","authDomain":"slamdunk-1ad93.firebaseapp.com","messagingSenderId":"463391882685","measurementId":"G-8VERSGQ8DL"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
