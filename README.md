# hrtimemock

[![Build Status](https://travis-ci.org/zaphod1984/hrtimemock.png)](https://travis-ci.org/zaphod1984/hrtimemock)

[![NPM](https://nodei.co/npm/hrtimemock.png)](https://nodei.co/npm/hrtimemock/)

[![NPM](https://nodei.co/npm-dl/hrtimemock.png?months=3)](https://nodei.co/npm/hrtimemock/)

hrtimemock is a mocking function that causes `process.hrtime` to output what ever time should have elapsed.

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