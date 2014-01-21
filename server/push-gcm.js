var gcm = require('node-gcm');
var message = new gcm.Message();

//API Server Key
var sender = new gcm.Sender('AIzaSyAEFyCC0gm6ZmtvPoory_UcKf_yy7nQz2g');
var registrationIds = [];

// Value the payload data to send...
message.addData('message', process.argv[2]);
message.addData('title', process.argv[3]);
message.addData('msgcnt', process.argv[4]); // Shows up in the notification in the status bar
message.addData('soundname', 'beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.

// At least one reg id required
registrationIds.push('APA91bEpTuw7L_O4NLP78JUOVTDfjCEcr5DlIsim4pJ1tE8caER7L4Paz6-jxafuPjrrIEDuRjmgpoNiD7jPzRquN7H9sF0CpZCDdi50ogM0GUdGDw_nekd-NXvlflOmJ6AXRG6hb4guF-rqaJBDLX3qp5uZo_nVLw');

/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});