import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CameraPreview } from 'ionic-native'

/*
  Generated class for the CameraPreview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera-preview',
  providers: [ CameraPreview ],
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>CameraPreview</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
<img src="{{originalPicture}}" width="{{pictureWidth}}" height="{{pictureHeight}}"><br />

<hr />

<button ion-button block (click)="button_startCamera()">startCamera</button><br />
<button ion-button block (click)="button_stopCamera()">stopCamera</button><br />
<button ion-button block (click)="button_takePicture()">takePicture</button><br />
<button ion-button block (click)="button_switchCamera()">switchCamera</button><br />
<button ion-button block (click)="button_show()">show</button><br />
<button ion-button block (click)="button_hide()">hide</button><br />

{{message}}<br />
{{originalPicture}}<br />

</ion-content>
`
})
export class CameraPreviewPage {

  message: string
  originalPicture: any
  previewPicture: any
  cameraObservable: any
  pictureWidth: number = 240
  pictureHeight: number = 320

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello CameraPreviewPage Page');

    CameraPreview.setOnPictureTakenHandler().subscribe(
      result => {
        this.message = "setOnPictureTakenHandler : " + result[0]
        this.originalPicture = result[0]  // アプリローカルフォルダに保存されたファイル名が帰ってくる
        CameraPreview.stopCamera()
      }
    )
  }


  button_startCamera(){
    this.message = "button_startCamera"

    CameraPreview.startCamera(
      { x: 0, y: 0, width: this.pictureWidth, height: this.pictureHeight }, // rect
      'back',  //defaultCamera
      true, // tapEnabled
      false,  // dragEnabled
      true, // toBack
      1 // alpha
    )
  }

  button_stopCamera(){
    this.message = "button_stopCamera"
    CameraPreview.stopCamera()
  }

  button_takePicture(){
    this.message = "button_takePicture"
    CameraPreview.takePicture({ maxWidth: this.pictureWidth, maxHeight: this.pictureHeight })
  }

  button_switchCamera(){
    this.message = "button_switchCamera"
    CameraPreview.switchCamera()
  }

  button_show(){
    this.message = "button_show"
    CameraPreview.show()
  }

  button_hide(){
    this.message = "button_hide"
    CameraPreview.hide()
  }

}
