const ftoc = function (temp) {
	let celsius = (temp - 32)*(5/9);
	let celsiusRounded = Math.round(celsius*10)/10;
	return celsiusRounded;
};
const ctof = function (temp) {
	let farenheit = temp*(9/5) + 32;
	let farenheitRounded = Math.round(farenheit*10)/10;
	return farenheitRounded;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
