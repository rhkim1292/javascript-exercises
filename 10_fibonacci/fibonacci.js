const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let fibArray = [1, 1];

    for (let i = 0; i < num; i++) {
        if (i === 0 || i === 1) {
            continue;
        }
        fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }


    return fibArray[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
