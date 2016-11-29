
# cordova-plugin-globalization
ロケール固有の通過とかの情報を取得
https://www.npmjs.com/package/cordova-plugin-globalization

## 使いかた

`Globalization.xxxx()` のメソッドから then で結果を受け取る。

```javascript
Globalization.getPreferredLanguage().then(
  res=>{
    this.state.push({name:'getPreferredLanguage', value: res.value})
  },
  err=>{ this.state.push({name:'getPreferredLanguage:error', value: err})}
)
```


## 注意点
2016-11-29 時点での ionic-native では `numberToString()` の扱いに間違いがあり、 number パラメータを渡そうとすると型チェックに引っかかってコンパイルできない。

`node_modules/ionic-native/dist/es5/plugins/globalization.d.ts`
`node_modules/ionic-native/dist/esm/plugins/globalization.d.ts`
の下記部分を修正すればコンパイル通るようになる。

```javascript
- static numberToString(options: {
+ static numberToString(numberToConvert: number, options: {
```
