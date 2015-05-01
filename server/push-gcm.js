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
registrationIds.push('APA91bFF6ShcwjLXTCjOeJDvrXljbKsJsasV6kkJxYwvj_u7DsTfktVzqKYyobVrHDcpNRLMMPpRoG--Wja8oFkLt6ZpJd7dplzti7iKljcFTQfZ_fcrK8uXY7ybh5o59jHNAAxT_kUnvHfpwVphJBvAnzD3YoDY3Q');

/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});