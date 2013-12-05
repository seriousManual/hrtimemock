function hrtimeMock(msTime) {
    var _hrtime = process.hrtime;

    var returnValue = [
        parseInt(msTime / 1e3, 10),
        (msTime % 1000) * 1e6
    ];

    var isFirst = true;
    process.hrtime = function() {
        if(isFirst) {
            isFirst = false;

            return [];
        } else {
            isFirst = true;
            process.hrtime = _hrtime;

            return returnValue;
        }
    }
}

module.exports = hrtimeMock;