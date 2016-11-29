import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SpinnerDialog page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-spinner-dialog',
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>SpinnerDialog</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

</ion-content>
`
})
export class SpinnerDialogPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SpinnerDialogPage Page');
  }

}
