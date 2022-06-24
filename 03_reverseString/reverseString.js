const reverseString = function(string) {
    let stringArray = string.split('');
    let result = '';
    for (let i = stringArray.length-1; i >= 0; i--) {
        result += stringArray[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
