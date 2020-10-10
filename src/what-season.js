const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (date === undefined) {
		return 'Unable to determine the time of year!';
	} else if (date.hasOwnProperty('toString')) {
		throw new Error;
	};
	let numberMonth = date.getMonth();
	if (numberMonth <= 1 || numberMonth === 11) {
		return "winter";
	} else if (numberMonth >= 2 && numberMonth <= 4) {
		return "spring";
	} else if (numberMonth >= 5 && numberMonth <= 7) {
		return "summer";
	} else if (numberMonth >= 8 && numberMonth <= 10) {
		return "fall";
	}
};
