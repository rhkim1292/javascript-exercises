const sumAll = function (start, end) {
    if (start < 0 || end < 0 || (typeof start) !== 'number' || (typeof end) !== 'number') {
        return 'ERROR';
    }

    let sum = 0;

    if (start <= end) {
        let i = start;
        while (i <= end) {
            sum += i;
            i++;
        }
    } else {
        let i = start;
        while (i >= end) {
            sum += i;
            i--;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
