import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TopPage } from '../pages/top/top';
import { SocialsharingPage } from '../pages/socialsharing/socialsharing';
import { GlobalizationPage } from '../pages/globalization/globalization'
import { MediaCapturePage } from '../pages/media-capture/media-capture';
import { SaveImageGalleryPage } from '../pages/save-image-gallery/save-image-gallery'
import { CameraPreviewPage } from '../pages/camera-preview/camera-preview'
import { SpinnerDialogPage } from '../pages/spinner-dialog/spinner-dialog'
import { ImageResizerPage } from '../pages/image-resizer/image-resizer'

@NgModule({
  declarations: [
    MyApp,
    TopPage,
    SocialsharingPage,
    GlobalizationPage,
    MediaCapturePage,
    SaveImageGalleryPage,
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
    SaveImageGalleryPage,
    CameraPreviewPage,
    SpinnerDialogPage,
    ImageResizerPage,
  ],
  providers: []
})
export class AppModule {}
