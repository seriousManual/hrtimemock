var hrtimemock = require('../');

hrtimemock(1000);

var a = process.hrtime();
var elapsed = process.hrtime(a);

console.log(elapsed); //will output [1,0]