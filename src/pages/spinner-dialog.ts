import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SpinnerDialog } from 'ionic-native'


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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SpinnerDialogPage Page');
  }

  toggleSpinner(){
    if ( ! this.spinnerActive ){
      SpinnerDialog.show('たいとる', ' めっせーじ')
      this.spinnerActive = true
    }else{
      SpinnerDialog.hide()
      this.spinnerActive = false
    }
  }

}
