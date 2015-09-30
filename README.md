# hrtimemock [![Build Status](https://travis-ci.org/seriousManual/hrtimemock.png)](https://travis-ci.org/seriousManual/hrtimemock)

[![NPM](https://nodei.co/npm/hrtimemock.png)](https://nodei.co/npm/hrtimemock/)

[![NPM](https://nodei.co/npm-dl/hrtimemock.png?months=3)](https://nodei.co/npm/hrtimemock/)

hrtimemock is a mocking function that causes `process.hrtime` to output what ever time should have elapsed.

## hrtimemock(mstime)
monkeypatches `process.hrtime` and for the second call returns the elapsed time specified by `mstime` in the familiar array form.

* `mstime` time in milliseconds

## Example

````
var hrtimemock = require('hrtimemock');

hrtimemock(1000);

var a = process.hrtime();
var elapsed = process.hrtime(a);

console.log(elapsed); //will output [1,0]
````

## Notice:
Works only for a pair of `process.hrtime` calls.  
After that it has to be called again.
