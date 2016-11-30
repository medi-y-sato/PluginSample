import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CameraPreview } from 'ionic-native'

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

<p>startCamera()しないと画像パスが渡されないようなので、画像が出てこない場合はstartCameraボタンを押してみて下さい</p>

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
  pictureWidth: number = 320
  pictureHeight: number = 240

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
