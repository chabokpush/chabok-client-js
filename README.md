![Logo](https://github.com/chabokpush/chabok-assets/blob/master/sdk-logo/JS.svg)

# Chabok Push Client for Javascript
[![npm](https://img.shields.io/npm/v/chabokpush.svg)](https://www.npmjs.com/package/chabokpush)
[![npm](https://img.shields.io/npm/dt/chabokpush.svg)](https://www.npmjs.com/package/chabokpush)

This Chabok Push client library supports web browsers, web workers.

Please check [library changes](https://doc.chabokpush.com/javascript/release-note.html).

## Getting started



#### Yarn (or NPM)

You can use any NPM-compatible package manager, including NPM itself and Yarn.

```bash
npm install chabokpush --save
```
Or:
```bash
yarn add chabokpush
```

Then:

```javascript
import chabokpush from 'chabokpush';
```

Or, if you're not using ES6 modules:

```javascript
const chabokpush = require('chabokpush');
```
#### CDN

```html
<script src="https://unpkg.com/chabokpush@[X.Y.Z]/dist/chabokpush.min.js"></script>
```
Replace [X.Y.Z] with the latest version

### Web Push Browser Support

The following table shows browsers' support for chabok messaging and web push notifications:
<table>
<thead>
<tr>
<th><strong>Browser</strong></th>
<th width="130px"><strong>web push</strong></th>
<th width="130px"><strong>chabok messaging</strong></th>
<th><strong>Notes</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">Chrome</td>
<td align="center">✓ v42+</td>
<td align="center">✓</td>
<td>In v51 and less, the `gcm_sender_id` is needed to get a push subscription.</td>
</tr>
<tr>
<td align="center">Edge</td>
<td align="center">✓ v17+ (April 2018)</td>
<td align="center">✓</td>
<td></td>
</tr>
<tr>
<td align="center">Firefox</td>
<td align="center">✓ v44+</td>
<td align="center">✓</td>
<td></td>
</tr>
<tr>
<td align="center">Opera</td>
<td align="center">✓ v39+ <strong>*</strong></td>
<td align="center">✓</td>
<td>
  <strong>*</strong> Opera supports push on Android but not on desktop.
  <br>
  <br>
  The `gcm_sender_id` is needed to get a push subscription.
</td>
</tr>
<tr>
<td align="center">Safari</td>
<td align="center">✗</td>
<td align="center">✓</td>
<td></td>
</tr>
<tr>
<td align="center">Samsung Internet Browser</td>
<td align="center">✓ v4.0.10-53+</td>
<td align="center">✓</td>
<td>The `gcm_sender_id` is needed to get a push subscription.</td>
</tr>
</tbody>
</table>

For supporting web push notifications on chrome, opera and Samsung internet browser `gcm_sender_id` should be added to `Manifest.js`: (If you already have created your `gcm_sender_id`, you can find it in panel>setting>android cart)
```javascript
{
  .....
    "gcm_sender_id": "GCM_SENDER_ID",
  .....
}
```
then add the `Manifest.js` to your root `index.html`:

```html
<head>
 ...
  <link rel="manifest" href="manifest.json">
...
</head>
```

## Initialization

```js
const auth = {
  appId: 'APP_ID',
  webKey: 'WEB_TOKEN',
  devMode:true
}
const options={silent: true}

const chabok = new chabokpush.Chabok(auth, options)
```
if devMode enabled you can Test your Project on development Mode.
You can get your `APP_ID`, `API_KEY`, `USERNAME` and `PASSWORD` from the [Chabok dashboard](http://sandbox.push.adpdigital.com/front/account/edit).

## Options

There are a number of configuration parameters which can be set for the ChabokPush client, which can be passed as an object to the ChabokPush constructor, i.e.:

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  |  |
| [options.realtime] | <code>Object</code> | <code>true</code> | set false to disable Realtime Connection |
| [options.webpush] | <code>Object</code> |  |  |
| [options.webpush.enabled] | <code>Boolean</code> | <code>false</code> | Set true to enable push Notification |
| [options.silent] | <code>Boolean</code> | <code>true</code> | Receive messages Silently |


## Sample Usage

```js
const auth = {
  appId: 'APP_ID',
  webKey: 'WEB_TOKEN',
  devMode: true
}
 const options = {
   webpush: {
     enabled: true,
     publicKey: 'demo'
   },
   silent: false,
 };

const chabok = new chabokpush.Chabok(auth, options)

chabok.on('registered', deviceId => console.log('DeviceId ', deviceId))

chabok.on('connected', _ => {
  console.log('Connected')
  chabok.subscribe('important') // subscribe to important channel
  chabok.subscribeEvent('geo') // subscribe to geo events
})

chabok.on('message', msg => console.log('Message ', msg))
chabok.on('geo', geoEvent => console.log('Geo Event ', geoEvent))

chabok.on('connecting', _ => console.log('Reconnecting'))
chabok.on('disconnected', _ => console.log('offline'))
chabok.on('closed', _ => console.log('disconnected'))

if (chabok.isRegistered() && chabok.getUserId()) {
  chabok.register(chabok.getUserId())
} else {
  chabok.register('012345678910111213') // your userId
}
```
