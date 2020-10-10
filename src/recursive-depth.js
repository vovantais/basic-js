const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let dep = 1;
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				let newDep = this.calculateDepth(arr[i]);
				if (dep < ++newDep) dep = newDep;
			}
		}

		return dep;
	}
};