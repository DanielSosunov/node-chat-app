var moment = require('moment');

var date = moment();
date.add(1,'year').subtract(1,'months')

//10:35 am
var date = moment(1234);
console.log(date.format('h:mm a'))
