const CustomError = require("../extensions/custom-error");

const chainMaker = {

	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		this.chain.push(value);
		return this;
	},
	removeLink(position) {
		if (typeof (position) !== 'number' || position < 1 || position > this.chain.length - 1) {
			this.chain = [];
			throw new Error;
		} else {
			this.chain.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let newChain = this.chain.map(e => '( ' + e + ' )').join('~~');
		this.chain = [];
		return newChain;
	}
};

module.exports = chainMaker;
