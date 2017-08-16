import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';

import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {DietmonPage} from '../pages/dietmon/dietmon';
import {DietguidePage} from '../pages/dietguide/dietguide';
import {ChartsPage} from '../pages/charts/charts';
import {BmiPage} from '../pages/bmi/bmi';


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Hospitals', component: PropertyListPage, icon: 'home'},
            {title: 'Doctors Search', component: BrokerListPage, icon: 'people'},
            {title: 'Diet Guideline', component: DietguidePage, icon: 'checkmark-circle'},
             {title: 'Diet monitor', component: DietmonPage, icon: 'md-thermometer'},
             {title: 'Charts', component: ChartsPage, icon: 'ios-pulse'},
             {title: 'Bmi Calculator', component: BmiPage, icon: 'ios-calculator'},
        ];

        // this.accountMenuItems = [
        //     {title: 'My Account', component: WelcomePage, icon: 'ios-contact'},
        //     {title: 'Logout', component: WelcomePage, icon: 'log-out'},
        // ];

        this.helpMenuItems = [
            {title: 'Welcome', component: WelcomePage, icon: 'bookmark'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
