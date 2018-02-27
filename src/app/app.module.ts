import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { StoreDetailPage } from '../pages/store-detail/store-detail';
import { OrderTabsPage } from '../pages/order-tabs/order-tabs';

import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { StoreProvider } from '../providers/store/store';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    StoreDetailPage,
    OrderTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    StoreDetailPage,
    OrderTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticateProvider,
    StoreProvider
  ]
})
export class AppModule {}
