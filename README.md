## Chabok Push for Javascript/Node.js
[![NPM version](https://img.shields.io/npm/v/chabokpush.svg?style=flat)](https://www.npmjs.com/package/chabokpush)
[![NPM downloads](https://img.shields.io/npm/dm/chabokpush.svg?style=flat)](https://www.npmjs.com/package/chabokpush)

Blow some breath to your app with Chabok realtime messaging and receive push notifications cross any platform with zero code.
Know your users's better, push them content based on their location or track their presence/location withoud headache.


### Installation
`npm install chabokpush`

OR 

See Chabok Push [Javascript library installation](http://doc.chabokpush.com/javascript/installation.html) document.


### Usage

You can get started with the following code:

```js
const options = {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_API_KEY',
  username: 'USERNAME',
  password: 'PASSWORD',
  devMode: true
}

const chabok = new chabokpush.Chabok(options)

chabok.on('registered', deviceId => console.log('DeviceId ', deviceId))

chabok.on('connected', _ => {
  console.log('Connected')
  chabok.enableDeliveryForEvent('geo')
})

chabok.on('message', msg => console.log('Message ', msg))
chabok.on('geo', geoEvent => console.log('Geo Event ', geoEvent))

chabok.on('connecting', _ => console.log('Reconnecting'))
chabok.on('disconnected', _ => console.log('offline'))
chabok.on('closed', _ => console.log('disconnected'))

chabok.register('989125336382')
```

See Chabok Push [Usage](http://doc.chabokpush.com/javascript/setup.html) page for a list of all available methods.


### Support
Please visit [Issues](https://github.com/chabokpush/chabok-client-js/issues).
