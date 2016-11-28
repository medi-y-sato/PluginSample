

# cordova-fabric-plugin
fabric.io の Crashlytics と Answers
https://www.npmjs.com/package/cordova-fabric-plugin

## 使いかた

ベース機能はプラグイン導入するだけ。
導入方法がちょっと特殊で、 'plugin add' する時にAPI Key/Secretを指定する。

```sh
ionic plugin add cordova-fabric-plugin --variable FABRIC_API_KEY={{APIKEY}} --variable FABRIC_API_SECRET={{APISECRET}}
```

これで 'ionic run android'`' とか 'ionic run ios' とかして実機で動かせば、勝手に起動してFabricと通信を始めてくれる。


## 注意点

'package.json' にAPI KeyとAPI Secretが思いっきり残ってしまうので、リポジトリ公開するときとかは気をつけること

'''json
"cordovaPlugins": [
  {
    "id": "cordova-fabric-plugin",
    "locator": "cordova-fabric-plugin",
    "variables": {
      "FABRIC_API_KEY": "APIKEY",
      "FABRIC_API_SECRET": "APISECRET"
    }
  }
]
'''
