const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	let newArr = arr.flat();
	let count = 0;
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === '^^') {
			count++;
		}
	}
	return count;
};