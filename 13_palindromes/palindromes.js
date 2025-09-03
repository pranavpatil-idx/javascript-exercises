const palindromes = function (string) {
    
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const originalString = string
    .toLowerCase()
    .split('')
    .filter( (char) => alphanumerical.includes(char))
    .join('')

    const reversedString = originalString.split('').reverse().join('');

    return originalString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
