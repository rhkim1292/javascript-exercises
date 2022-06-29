const palindromes = function (string) {
    let reversedString;
    let originalStringModified;
    originalStringModified = string.replaceAll(',', '').replaceAll(' ',  '').replaceAll('.', '').replaceAll('!', ''); // Remove all punctuation
    originalStringModified = originalStringModified.toLowerCase(); // Make entire string lowercase
    reversedString = originalStringModified.split('').reverse().join(''); // Reverse the string
    return originalStringModified === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
