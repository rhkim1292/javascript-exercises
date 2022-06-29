const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	// return arr.reduce((total, currNum) => {
	// 	total += currNum;
	// 	return total;
	// }, 0)
	return arr.reduce(add, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, currNum) => {
		total *= currNum;
		return total;
	}, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let res = 1;
	for (let i = num; i > 0; i--) {
		res *= i;
	}
	return res;
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
