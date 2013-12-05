var expect = require('chai').expect;

var hrtimeMock = require('../');

describe('hrtimemock', function() {

    it('should mock', function() {
        hrtimeMock(1000);

        var a = process.hrtime();
        var elapsed = process.hrtime();

        expect(elapsed).to.deep.equal([1, 0]);
    });

});