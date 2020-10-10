const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(mode = true) {
		this.mode = mode;
		this.alpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
	}

	encrypt(arg, key) {
		const mes = [...arg.toUpperCase()];
		const keys = [...key.toUpperCase()];
		let pos = 0;
		let result = mes.map(index => {
			if (this.alpha.includes(index)) {
				let idx = (this.alpha.indexOf(keys[pos]) + this.alpha.indexOf(index)) % this.alpha.length;
				pos = ++pos % keys.length;
				return this.alpha[idx];
			}
			return index;
		});
		return this.mode ? result.join('') : result.reverse().join('');
	}

	decrypt(arg, key) {
		const mes = [...arg.toUpperCase()];
		const keys = [...key.toUpperCase()];
		let pos = 0;
		let result = mes.map(index => {
			if (this.alpha.includes(index)) {
				let idx = this.alpha.indexOf(index) - this.alpha.indexOf(keys[pos]);
				if (idx < 0) idx += this.alpha.length;
				pos = ++pos % keys.length;
				return this.alpha[idx];
			}
			return index;
		});
		return this.mode ? result.join('') : result.reverse().join('');
	}
}

module.exports = VigenereCipheringMachine;
