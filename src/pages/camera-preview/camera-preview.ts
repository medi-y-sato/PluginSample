import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CameraPreview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera-preview',
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>CameraPreview</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

</ion-content>
`
})
export class CameraPreviewPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CameraPreviewPage Page');
  }

}
