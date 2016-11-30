import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture } from 'ionic-native'

@Component({
  selector: 'page-media-capture',
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>MediaCapture</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

{{result | json}}

<hr />

<button ion-button (click)="captureImage()">captureImage</button>
<button ion-button (click)="captureAudio()">captureAudio</button>
<button ion-button (click)="captureVideo()">captureVideo</button>

</ion-content>
`
})
export class MediaCapturePage {

  result: any

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MediaCapturePage Page');
  }

  captureImage(){
    MediaCapture.captureImage().then( res => {
      this.result = res
    })
  }

  captureAudio(){
    MediaCapture.captureAudio().then( res => {
      this.result = res
    })
  }

  captureVideo(){
    MediaCapture.captureVideo().then( res => {
      this.result = res
    })
  }

}
