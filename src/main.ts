import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [FIREBASE_PROVIDERS, defaultFirebase({
    apiKey: "AIzaSyCixFZpJ-rcW1mXHAeMWyeMNK7J5adOcdc",
    authDomain: "radeg-businesscontacts.firebaseapp.com",
    databaseURL: "https://radeg-businesscontacts.firebaseio.com",
    storageBucket: "radeg-businesscontacts.appspot.com",
  })]);

