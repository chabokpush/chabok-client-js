/*! chabokpush - 1.2.0 | (c) 2017, 2019  ADP digital | ISC | http://chabokpush.com/ */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("chabokpush", [], factory);
	else if(typeof exports === 'object')
		exports["chabokpush"] = factory();
	else
		root["chabokpush"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 168);
/******/ })
/************************************************************************/
/******/ ({

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


self.addEventListener('push', function (event) {
  console.log('self', self);
  if (event.data.json()) {
    var notificationPayload = event.data.json();

    if (!notificationPayload.silent) {
      if (notificationPayload.clickUrl) {
        // attach onclick url to notification
        notificationPayload.data = notificationPayload.data || {};
        notificationPayload.data.clickUrl = notificationPayload.clickUrl;
      }
      event.waitUntil(self.registration.showNotification(notificationPayload.title, notificationPayload));
    }
  }
});

self.addEventListener('pushsubscriptionchange', function (event) {
  var options = event.oldSubscription.options;

  // TODO handle token refresh
  // Fetch options if they do not exist in the event.
  event.waitUntil(self.registration.pushManager.subscribe(options).then(function (subscription) {// eslint-disable-line no-unused-vars
    // Send new subscription to application server.
  }));
});

self.addEventListener('notificationclick', function (event) {
  var url = '/';

  if (event && event.notification && event.notification.data && event.notification.data.clickUrl) {
    url = event.notification.data.clickUrl;
  }

  event.notification.close();

  event.waitUntil(self.clients.matchAll({
    type: 'window'
  }).then(function (clientList) {
    for (var i = 0; i < clientList.length; i += 1) {
      var client = clientList[i];
      var found = client.url === url || client.url === url + '/';

      if (found && 'focus' in client) {
        client.focus();
        return;
      }
    }
    if (self.clients.openWindow) {
      self.clients.openWindow(url);
    }
  }));
});

/***/ })

/******/ });
});
//# sourceMappingURL=ChabokSDKWorker.js.map