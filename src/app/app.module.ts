import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TopPage } from '../pages/top/top';
import { SocialsharingPage } from '../pages/socialsharing/socialsharing';
import { MediaCapturePage } from '../pages/media-capture/media-capture';
import { SaveImageGalleryPage } from '../pages/save-image-gallery/save-image-gallery'
import { CameraPreviewPage } from '../pages/camera-preview/camera-preview'

@NgModule({
  declarations: [
    MyApp,
    TopPage,
    SocialsharingPage,
    MediaCapturePage,
    SaveImageGalleryPage,
    CameraPreviewPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TopPage,
    SocialsharingPage,
    MediaCapturePage,
    SaveImageGalleryPage,
    CameraPreviewPage,
  ],
  providers: []
})
export class AppModule {}
