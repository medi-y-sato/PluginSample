import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SocialSharing } from 'ionic-native'
/*
  Generated class for the Socialsharing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-socialsharing',
  providers: [  ],
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>socialsharing</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>

<h1>cordova-plugin-socialsharing</h1>
<div>
いわゆる[共有]メニュー
<a href="https://www.npmjs.com/package/cordova-plugin-socialsharing">cordova-plugin-x-socialsharing</a>
</div>

</ion-content>
`
})

export class SocialsharingPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello SocialsharingPage Page');
    this.share()
  }

  share(){
    SocialSharing.shareWithOptions(
      {
        message: 'share this', // not supported on some apps (Facebook, Instagram)
        subject: 'the subject', // fi. for email
        files: ['', ''], // an array of filenames either locally or remotely
        url: 'https://www.website.com/foo/#bar?a=b',
        chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
      },
    ).then(
      result => console.log(result.completed + "/" + result.app),
      msg => console.log("Sharing failed with message: " + msg)
    )
  }

}
