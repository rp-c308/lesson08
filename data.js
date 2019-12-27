process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var fonoapi = require('fonoapi-nodejs');
fonoapi.token = 'fdb413db9b6d7a743f65af04deff8de6b1605e64656dc8a4';

// get devices w/ brand
//fonoapi.getDevices(myCallback, 'iphone', 'apple');
// get devices w/o brand
//fonoapi.getLatest(myCallback, 5, 'samsung');

// get latest devices from apple (limit result to 5)
fonoapi.getLatest(myCallback, 5, 'apple');

function myCallback(queryString, data) {
  console.log(data.Brand + ' ' + data.DeviceName);
}
