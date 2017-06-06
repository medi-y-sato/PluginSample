
# device
デバイスの情報を取得する
https://github.com/apache/cordova-plugin-device

https://ionicframework.com/docs/native/device/

## 実装方法

省略、普通にProviderとして登録すれば良い

```typescript
  constructor( private device: Device ) {
    console.dir(this.device)
  }
```


## 解説

単にデバイス由来の情報を取得するだけ。Android OSのバージョンなども取れる。
UDIDなど、存在しない者についてはundefinedが戻る仕様の模様。
