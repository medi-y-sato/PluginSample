import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ImageResizer, ImageResizerOptions } from 'ionic-native'

/*
  Generated class for the ImageResizer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-image-resizer',
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>ImageResizer</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

<input type="range" #size min="64" max="256" value="128"  (input)="resizeImage(this.sourceImageSrc,size.value)" />

<hr />

<img src="{{destinationImageSrc}}" width="{{destinationImageWidth}}" height="{{destinationImageHeight}}"><br />

</ion-content>
`
})
export class ImageResizerPage {

  sourceImageSrc: string
  destinationImageSrc: string
  destinationImageWidth: number
  destinationImageHeight: number

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello ImageResizerPage Page');
    this.loadImage()
  }

  loadImage(){
    console.log('loadImage()')
    let sourceImage = new Image
    let destinationImage = new Image

    sourceImage.onload = ( res ) => {
      console.log('sourceImage.onload fired')
      console.log(JSON.stringify(res))
      this.sourceImageSrc = sourceImage.src
      this.resizeImage(sourceImage.src, 128)
    }
    sourceImage.src = "assets/Icon_180.png"

  }

  resizeImage(srcFilePath: string, size:number){
    console.log('resizeImage(' + srcFilePath + ',' + size + ')')
    let options = {
       uri: srcFilePath,
       folderName: 'PluginSamples', // required for Android
       fileName: 'pluginsamples_thumbnail.png', //required for ios
       quality: 90,
       width: size,
       height: size
    } as ImageResizerOptions;

    ImageResizer
      .resize(options)
      .then(
        (filePath: string) => {
          this.destinationImageSrc = filePath
          this.destinationImageWidth = size
          this.destinationImageHeight = size
        },
        (err) => {
          console.error(err)
        }
     )
  }

}
