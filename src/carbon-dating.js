const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	let str = sampleActivity;
	if (typeof (str) === 'string') {
		str = parseFloat(str);
		if (str <= 0 || str > MODERN_ACTIVITY || !isFinite(str)) return false;
		return Math.ceil(Math.log(MODERN_ACTIVITY / str) / (0.693 / HALF_LIFE_PERIOD));
	} else return false;
};
