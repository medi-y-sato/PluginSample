import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Globalization page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-globalization',
  templateUrl: 'globalization.html'
})
export class GlobalizationPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GlobalizationPage Page');
  }

}
