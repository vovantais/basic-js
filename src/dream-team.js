const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
	if (Array.isArray(arr)) {
		return arr.map(index => {
			if (typeof (index) === "string")
				return index.trim().toUpperCase()[0];
		}).sort().join("");
	} else {
		return false;
	}
};
