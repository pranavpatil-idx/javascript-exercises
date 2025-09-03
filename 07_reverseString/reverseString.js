const reverseString = function(input) {
    const ans = input.split(''); 
    const rev = ans.reverse();
    const final = rev.join('');
    return final;
};

// Do not edit below this line
module.exports = reverseString;
