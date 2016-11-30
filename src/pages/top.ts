import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SocialsharingPage } from './socialsharing';
import { GlobalizationPage } from './globalization'
import { MediaCapturePage } from './media-capture';
import { CameraPreviewPage } from './camera-preview'
import { SpinnerDialogPage } from './spinner-dialog'
import { ImageResizerPage } from './image-resizer'

/*
  Generated class for the Top page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-top',
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>Top</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

  <h1>cordova プラグインを色々実装してみた</h1>

  <ion-list>
    <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
      {{p.title}}
    </button>
  </ion-list>

</ion-content>
`
})
export class TopPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: '自前カメラUI', component: CameraPreviewPage },
      { title: 'ロケール情報の取得', component: GlobalizationPage },
      { title: '画像リサイズ', component: ImageResizerPage },
      { title: '録音/録画など', component: MediaCapturePage },
      { title: '共有', component: SocialsharingPage },
      { title: 'スピナー', component: SpinnerDialogPage },
    ];
  }

  ionViewDidLoad() {
    console.log('Hello TopPage Page');
  }

  openPage(page) {
    this.navCtrl.push(page.component)
  }

}
