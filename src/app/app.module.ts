import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {AboutPage} from '../pages/about/about';

// newly created
import {DietmonPage} from '../pages/dietmon/dietmon';
import {DietmondetailPage} from '../pages/dietmondetail/dietmondetail';
import {DietmonaddPage} from '../pages/dietmonadd/dietmonadd';
import {DietguidePage} from '../pages/dietguide/dietguide';
import {ChartsPage} from '../pages/charts/charts';
import {DietdetailPage} from '../pages/dietdetail/dietdetail';
import {BmiPage} from '../pages/bmi/bmi';



import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";

// Newly created
import {GuideService} from "../providers/guide-service-mock";
import { DietdataProvider } from '../providers/dietdata';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    DietmonPage,
    PropertyListPage,
    PropertyDetailPage,
    DietguidePage,
    ChartsPage,
    DietdetailPage,
    DietmonaddPage,
    DietmondetailPage,
    BrokerListPage,
    BrokerDetailPage,
    BmiPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    DietmonPage,
    DietguidePage,
    ChartsPage,
    DietdetailPage,
    DietmonaddPage,
    DietmondetailPage,
    BrokerListPage,
    BrokerDetailPage,
    BmiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
    BrokerService,
    GuideService,
    DietdataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
  ]
})
export class AppModule {}
