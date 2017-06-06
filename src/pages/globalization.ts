import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Globalization } from '@ionic-native/globalization'

@Component({
  selector: 'page-globalization',
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>Globalization</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

  <ion-card *ngFor="let list of state">
    <ion-card-header>{{list.name}}</ion-card-header>
    <ion-card-content>{{list.value | json}}</ion-card-content>
  </ion-card>

</ion-content>

`
})
export class GlobalizationPage {

  state: any[]

  constructor(
    public navCtrl: NavController,
    public globalization: Globalization,
  ) {
    this.state = []
    let nowDate: Date = new Date()
    let nowDateString = '1976/03/30 12:34:56'

    this.globalization.getPreferredLanguage().then(
      res => {
        this.state.push({ name: 'getPreferredLanguage', value: res.value })
      },
      err => { this.state.push({ name: 'getPreferredLanguage:error', value: err }) }
    )

    this.globalization.getLocaleName().then(
      res => { this.state.push({ name: 'getLocaleName', value: res.value }) },
      err => { this.state.push({ name: 'getLocaleName:error', value: err }) }
    )

    this.globalization.dateToString(nowDate, { formatLength: 'full', selector: 'date and time' }).then(
      res => { this.state.push({ name: 'dateToString', value: nowDate + ' -> ' + res.value }) },
      err => { this.state.push({ name: 'dateToString:error', value: err }) }
    )

    this.globalization.getDateNames({ type: 'wide', item: 'month' }).then(
      res => { this.state.push({ name: 'getDatePattern', value: res.value }) },
      err => { this.state.push({ name: 'getDatePattern:error', value: err }) }
    )

    this.globalization.getCurrencyPattern('JPY').then(
      res => { this.state.push({ name: 'getCurrencyPattern', value: res }) },
      err => { this.state.push({ name: 'getCurrencyPattern:error', value: err }) }
    )

    this.globalization.getDatePattern({ formatLength: 'full', selector: 'date and time' }).then(
      res => { this.state.push({ name: 'getDatePattern', value: res.pattern }) },
      err => { this.state.push({ name: 'getDatePattern:error', value: err }) }
    )

    this.globalization.getFirstDayOfWeek().then(
      res => { this.state.push({ name: 'getFirstDayOfWeek', value: res.value }) },
      err => { this.state.push({ name: 'getFirstDayOfWeek:error', value: err }) }
    )

    this.globalization.getNumberPattern({ type: 'decimal' }).then(
      res => { this.state.push({ name: 'getNumberPattern', value: res.pattern }) },
      err => { this.state.push({ name: 'getNumberPattern:error', value: err }) }
    )

    this.globalization.isDayLightSavingsTime(new Date()).then(
      res => { this.state.push({ name: 'isDayLightSavingsTime', value: res.dst }) },
      err => { this.state.push({ name: 'isDayLightSavingsTime:error', value: err }) }
    )

    this.globalization.numberToString(3.141592, { type: 'decimal' }).then(
      res => { this.state.push({ name: 'numberToString', value: 3.141592 + ' -> ' + res.value }) },
      err => { this.state.push({ name: 'numberToString:error', value: err }) }
    )

    this.globalization.stringToDate(nowDateString, { formatLength: null, selector: null }).then(
      res => { this.state.push({ name: 'stringToDate', value: nowDateString + ' -> ' + res }) },
      err => { this.state.push({ name: 'stringToDate:error', value: err }) }
    )

    this.globalization.stringToNumber("1234567890", { type: 'decimal' }).then(
      res => { this.state.push({ name: 'stringToNumber', value: "1234567890" + ' -> ' + res.value }) },
      err => { this.state.push({ name: 'stringToNumber:error', value: err }) }
    )

  }

  ionViewDidLoad() {
    console.log('Hello GlobalizationPage Page');
  }

}
