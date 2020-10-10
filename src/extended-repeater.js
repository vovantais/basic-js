const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let result = [];
	if (options.separator == undefined) options.separator = '+';
	if (options.addition === undefined) options.addition = '';
	if (options.addition == null) options.addition = 'null';
	if (options.repeatTimes == undefined) options.repeatTimes = 1;
	if (options.additionSeparator == undefined) options.additionSeparator == '';
	if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
	for (let i = 0; i < options.repeatTimes; i++) {
		let prStr = [];
		for (let j = 0; j < options.additionRepeatTimes; j++) {
			prStr.push(options.addition);
		}
		result.push(str + prStr.join(options.additionSeparator));
	}
	return result.join(options.separator);
};
