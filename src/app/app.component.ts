import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TopPage } from '../pages/top/top';
import { SocialsharingPage } from '../pages/socialsharing';
import { GlobalizationPage } from '../pages/globalization'
import { MediaCapturePage } from '../pages/media-capture';
import { CameraPreviewPage } from '../pages/camera-preview'
import { SpinnerDialogPage } from '../pages/spinner-dialog'
import { ImageResizerPage } from '../pages/image-resizer'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TopPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'トップページ', component: TopPage },
      { title: 'SocialsharingPage', component: SocialsharingPage },
      { title: 'GlobalizationPage', component: GlobalizationPage },
      { title: 'MediaCapturePage', component: MediaCapturePage },
      { title: 'CameraPreviewPage', component: CameraPreviewPage },
      { title: 'SpinnerDialogPage', component: SpinnerDialogPage },
      { title: 'ImageResizerPage', component: ImageResizerPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
