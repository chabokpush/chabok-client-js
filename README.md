# Chabok Push Client for Javascript

## Getting started

`npm install chabokpush`
  
## Sample Usage

```js
const options = {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_API_KEY',
  username: 'USERNAME',
  password: 'PASSWORD',
  devMode: true
}

const push = new chabokpush.Chabok(options)

push.on('registered', deviceId => console.log('DeviceId ', deviceId))
push.on('connected', _ => console.log('Connected'))
push.on('message', msg => console.log('Message ', msg))

push.register('989125336382')

ch.enableDeliveryForEvent('geo')

ch.on('geo', geoEvent => console.log('Geo Event ', geoEvent))
```
