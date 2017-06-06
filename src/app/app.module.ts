import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { TopPage } from '../pages/top';
import { SocialsharingPage } from '../pages/socialsharing';
import { GlobalizationPage } from '../pages/globalization'
import { MediaCapturePage } from '../pages/media-capture';
import { CameraPreviewPage } from '../pages/camera-preview'
import { SpinnerDialogPage } from '../pages/spinner-dialog'
import { ImageResizerPage } from '../pages/image-resizer'
import { DevicePage } from '../pages/device/device'

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Device } from '@ionic-native/device';


@NgModule({
  declarations: [
    MyApp,
    TopPage,
    SocialsharingPage,
    GlobalizationPage,
    MediaCapturePage,
    CameraPreviewPage,
    SpinnerDialogPage,
    ImageResizerPage,
    DevicePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TopPage,
    SocialsharingPage,
    GlobalizationPage,
    MediaCapturePage,
    CameraPreviewPage,
    SpinnerDialogPage,
    ImageResizerPage,
    DevicePage,
  ],
  providers: [
    SplashScreen,
    StatusBar,
    Device,
  ]
})
export class AppModule { }
