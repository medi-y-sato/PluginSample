import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import {FormBuilder, FormGroup } from '@angular/forms';
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

<ion-list inset>
  <form [formGroup]="form">
    <ion-item>
      <ion-label>message</ion-label>
      <ion-input formControlName="message" placeholder="message"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>subject</ion-label>
      <ion-input formControlName="subject" placeholder="subject"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>url</ion-label>
      <ion-input formControlName="url" placeholder="url"></ion-input>
    </ion-item>
    <ion-item>
      <button ion-button block (click)="share()">Submit</button>
    </ion-item>
  </form>
</ion-list>

</ion-content>
`
})

export class SocialsharingPage {

  form: FormGroup;

  constructor(public navCtrl: NavController, @Inject(FormBuilder) formbuilder: FormBuilder) {
    this.form = formbuilder.group({
      message:'',
      subject:'',
      title:'',
      url:'https://example.com',
    });
  }

  ionViewDidLoad() {
    console.log('Hello SocialsharingPage Page');

  }

  share(){
    console.dir(this.form)

    SocialSharing.shareWithOptions(
      {
        message: this.form.value.message,
        subject: this.form.value.subject,
//        files: ['', ''],
        url: this.form.value.url,
        chooserTitle: '共有する:'
      },
    ).then(
      result => console.log(result.completed + "/" + result.app),
      msg => console.log("Sharing failed with message: " + msg)
    )

  }

}
