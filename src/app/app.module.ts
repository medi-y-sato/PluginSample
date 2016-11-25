import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TopPage } from '../pages/top/top';
import { SocialsharingPage } from '../pages/socialsharing/socialsharing';
import { MediaCapturePage } from '../pages/media-capture/media-capture';

@NgModule({
  declarations: [
    MyApp,
    TopPage,
    SocialsharingPage,
    MediaCapturePage,
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
  ],
  providers: []
})
export class AppModule {}
