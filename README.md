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
