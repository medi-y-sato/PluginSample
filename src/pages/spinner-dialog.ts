import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SpinnerDialog } from '@ionic-native/spinner-dialog'


@Component({
  selector: 'page-spinner-dialog',
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>SpinnerDialog</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

<button ion-button (click)="toggleSpinner()">spinner</button><br />
スピナー出てからもう一回タップするとスピナー終わります

</ion-content>
`
})
export class SpinnerDialogPage {

  spinnerActive: boolean

  constructor(
    public navCtrl: NavController,
    public spinnerDialog: SpinnerDialog,
  ) { }

  ionViewDidLoad() {
    console.log('Hello SpinnerDialogPage Page');
  }

  toggleSpinner() {
    if (!this.spinnerActive) {
      this.spinnerDialog.show('たいとる', ' めっせーじ')
      this.spinnerActive = true
    } else {
      this.spinnerDialog.hide()
      this.spinnerActive = false
    }
  }

}
