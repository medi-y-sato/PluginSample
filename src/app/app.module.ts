import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TopPage } from '../pages/top/top';
import { SocialsharingPage } from '../pages/socialsharing/socialsharing';
import { GlobalizationPage } from '../pages/globalization/globalization'

@NgModule({
  declarations: [
    MyApp,
    TopPage,
    SocialsharingPage,
    GlobalizationPage,
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
  ],
  providers: []
})
export class AppModule {}
