const add = function(a,b) {
  const ans = a+b;
  return ans;
};

const subtract = function(a,b) {
  const ans = a - b;
  return ans;
};

const sum = function(array) {
  return array.reduce( (total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce( (total, current) => total * current)
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(num) {
  let ans = 1;
  for(let i = num; i>0; i--){
    ans *= i;
  }
  return ans; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
