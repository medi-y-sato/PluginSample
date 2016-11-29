
# cordova-plugin-camera-preview
カメラのプレビューに任意のBase64画像重ねられるかも！
https://github.com/westonganger/cordova-plugin-camera-preview

https://ionicframework.com/docs/v2/native/camerapreview/

## 実装方法

```javascript
CameraPreview.startCamera(
  { x: 0, y: 0, width: this.pictureWidth, height: this.pictureHeight }, // rect
  'back',  //defaultCamera
  true, // tapEnabled
  false,  // dragEnabled
  true, // toBack
  1 // alpha
)
```
などとしてカメラを起動し、

```javascript
CameraPreview.takePicture({ maxWidth: this.pictureWidth, maxHeight: this.pictureHeight })
```
などとして画像を取得させる。すると予めsubscribeしておいた `CameraPreview.setOnPictureTakenHandler()` が呼ばれ、取得した画像ファイルへのパスが得られる。

....という流れのはずだが、何故か再度 startCamera() しないとファイルパスが送られてこない。

正直プラグイン自体の動きがよくわからなかった....

ただ、無音カメラがあっさり作れますね、コレ

## 動作イメージ



## 解説
