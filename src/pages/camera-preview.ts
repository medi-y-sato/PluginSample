import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview'

@Component({
  selector: 'page-camera-preview',
  providers: [CameraPreview],
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

  constructor(
    public navCtrl: NavController,
    public cameraPreview: CameraPreview,
  ) {
  }

  ionViewDidLoad() {
    console.log('Hello CameraPreviewPage Page');

  }


  button_startCamera() {
    this.message = "button_startCamera"

    let cameraOptions: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: this.pictureWidth,
      height: this.pictureHeight,
      camera: 'back',
      tapPhoto: true,
      previewDrag: false,
      toBack: true,
      alpha: 1

    }
    this.cameraPreview.startCamera(cameraOptions)
  }

  button_stopCamera() {
    this.message = "button_stopCamera"
    this.cameraPreview.stopCamera()
  }

  button_takePicture() {
    this.message = "button_takePicture"
    this.cameraPreview.takePicture({}).then(
      result => {
        this.message = "setOnPictureTakenHandler : " + result[0]
        this.originalPicture = result[0]  // アプリローカルフォルダに保存されたファイル名が帰ってくる
        this.cameraPreview.stopCamera()
      }
    )
  }

  button_switchCamera() {
    this.message = "button_switchCamera"
    this.cameraPreview.switchCamera()
  }

  button_show() {
    this.message = "button_show"
    this.cameraPreview.show()
  }

  button_hide() {
    this.message = "button_hide"
    this.cameraPreview.hide()
  }

}
