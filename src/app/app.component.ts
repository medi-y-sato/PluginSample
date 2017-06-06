import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TopPage } from '../pages/top';

@Component({
  template: `
  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TopPage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
