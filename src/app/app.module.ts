import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const  FIREBASE_CREDENTIALS = {
  apiKey: "AIzaSyC-fGf2k23Rac7bLkUJJDcF5QrJjDAVVN8",
  authDomain: "ionicfire-c9248.firebaseapp.com",
  databaseURL: "https://ionicfire-c9248.firebaseio.com",
  projectId: "ionicfire-c9248",
  storageBucket: "ionicfire-c9248.appspot.com",
  messagingSenderId: "435610583097"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}