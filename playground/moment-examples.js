var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Now Timestamp ' + now.unix());

var timeStamp = 1472577280;
var currentMoment = moment.unix(timeStamp);

console.log('Current Moment ', currentMoment.format("MMM D, YY @ h:mm a"));
console.log('Current Moment ', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
