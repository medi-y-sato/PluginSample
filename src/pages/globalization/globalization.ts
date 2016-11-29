import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Globalization } from 'ionic-native'
/*
  Generated class for the Globalization page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

{{state | json}}


</ion-content>

`
})
export class GlobalizationPage {

  state: any[]

  constructor(public navCtrl: NavController) {
    console.dir(Globalization)

    this.state = []
    let nowDate: Date = new Date()

    Globalization.getPreferredLanguage().then(
      res=>{
        this.state.push({name:'getPreferredLanguage', value: res.value})
      },
      err=>{ this.state.push({name:'getPreferredLanguage:error', value: err})}
    )

    Globalization.getLocaleName().then(
      res=>{ this.state.push({name: 'getLocaleName', value: res.value}) },
      err=>{ this.state.push({name:'getLocaleName:error', value: err})}
    )

    Globalization.dateToString(nowDate,{formatLength:'full', selector:'date and time'}).then(
      res=>{ this.state.push({name:'dateToString', value: res.value}) },
      err=>{ this.state.push({name:'dateToString:error', value: err})}
    )

    Globalization.getDateNames({type:'wide', item:'month'}).then(
      res=>{ this.state.push({name:'getDatePattern', value: res.value}) },
      err=>{ this.state.push({name:'getDatePattern:error', value: err})}
    )

    Globalization.getCurrencyPattern('JPY').then(
      res=>{ this.state.push({name: 'getCurrencyPattern', value: res}) },
      err=>{ this.state.push({name:'getCurrencyPattern:error', value: err})}
    )

    Globalization.getDatePattern({formatLength:'full', selector:'date and time'}).then(
      res=>{ this.state.push({name:'getDatePattern', value: res.pattern}) },
      err=>{ this.state.push({name:'getDatePattern:error', value: err})}
    )

    Globalization.getFirstDayOfWeek().then(
      res=>{ this.state.push({name:'getFirstDayOfWeek', value: res.value}) },
      err=>{ this.state.push({name:'getFirstDayOfWeek:error', value: err})}
    )

    Globalization.getNumberPattern({type:'decimal'}).then(
      res=>{ this.state.push({name:'getNumberPattern', value: res.pattern}) },
      err=>{ this.state.push({name:'getNumberPattern:error', value: err})}
    )

    Globalization.isDayLightSavingsTime(new Date()).then(
      res=>{ this.state.push({name:'isDayLightSavingsTime', value: res}) },
      err=>{ this.state.push({name:'isDayLightSavingsTime:error', value: err})}
    )

/*
    let numberValue: number = 0.15
    Globalization.numberToString(numberValue, {type:'percent'}).then(
      res=>{ this.state.push({name:'numberToString', value: res}) },
      err=>{ this.state.push({name:'numberToString:error', value: err})}
    )
*/

    Globalization.stringToDate(nowDate.toString(),{formatLength:null, selector:null}).then(
      res=>{ this.state.push({name:'stringToDate', value: res}) },
      err=>{ this.state.push({name:'stringToDate:error', value: err})}
    )

    Globalization.stringToNumber("1234567890",{type:'decimal'}).then(
      res=>{ this.state.push({name:'stringToNumber', value: res.value}) },
      err=>{ this.state.push({name:'stringToNumber:error', value: err})}
    )

  }

  ionViewDidLoad() {
    console.log('Hello GlobalizationPage Page');
  }

}
