const fibonacci = function(numArg) {

    let num;
    if(typeof numArg !== 'number'){
        num = parseInt(numArg)
    } else {
        num = numArg;
    }

    if(num === 0) return 0;

    if(num<0) return "OOPS";

    let a = 0;
    let b = 1;
    for(let i = 2; i<= num; i++){
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
