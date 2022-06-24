const removeFromArray = function() {
    let args = Array.from(arguments);

    for (let i = 1; i < args.length; i++) {
        let idxOfCurrElement = args[0].indexOf(args[i]);
        if (idxOfCurrElement < 0) continue;
        args[0].splice(idxOfCurrElement, 1);
    }

    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
