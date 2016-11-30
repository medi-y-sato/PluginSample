import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TopPage } from '../pages/top';
import { SocialsharingPage } from '../pages/socialsharing';
import { GlobalizationPage } from '../pages/globalization'
import { MediaCapturePage } from '../pages/media-capture';
import { CameraPreviewPage } from '../pages/camera-preview'
import { SpinnerDialogPage } from '../pages/spinner-dialog'
import { ImageResizerPage } from '../pages/image-resizer'

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
  ],
  imports: [
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
  ],
  providers: []
})
export class AppModule {}
