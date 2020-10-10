const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let towel = {};
	towel.turns = Math.pow(2, disksNumber) - 1;
	towel.seconds = Math.trunc(towel.turns / (turnsSpeed / 3600));
	return towel;
};
