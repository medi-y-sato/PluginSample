import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CameraPreview, CameraPreviewRect } from 'ionic-native'

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

{{message}}<br />

{{cameraObservable | json | async}}<br />

<img #originalPicture width="48" height="64"><br />
<img #previewPicture width="20" height="32">

<hr />

<button ion-button block (click)="button_startCamera()">startCamera</button><br />
<button ion-button block (click)="button_stopCamera()">stopCamera</button><br />
<button ion-button block (click)="button_takePicture()">takePicture</button><br />
<button ion-button block (click)="button_switchCamera()">switchCamera</button><br />
<button ion-button block (click)="button_show()">show</button><br />
<button ion-button block (click)="button_hide()">hide</button><br />

</ion-content>
`,
  styles: [`
    html, body, ion-content, ion-page, .nav-decor{
        background-color: transparent !important;
    }
    `]
})
export class CameraPreviewPage {

  message: string
  originalPicture: any
  previewPicture: any
  cameraObservable: any

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello CameraPreviewPage Page');
  }

  button_startCamera(){
    this.message = "button_startCamera"

    CameraPreview.startCamera(
      { x: 0, y: 0, width: 480, height: 640 }, // rect
      'back',  //defaultCamera
      true, // tapEnabled
      false,  // dragEnabled
      true, // toBack
      .5 // alpha
    )
    CameraPreview.setOnPictureTakenHandler().subscribe( result => {
      this.originalPicture = result[0]
      this.previewPicture = result[1]

    })
  }
  button_stopCamera(){
    this.message = "button_stopCamera"
    CameraPreview.stopCamera()
  }
  button_takePicture(){
    this.message = "button_takePicture"
    CameraPreview.takePicture({ maxWidth: 48, maxHeight: 64 })
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
