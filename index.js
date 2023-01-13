/**
 * @typedef {{
 * 	numbers: boolean;
 * 	symbols: boolean;
 * 	lowercase: boolean;
 *  uppercase: boolean;
 * 	duplicates: boolean;
 * }} Options
 */
// @ts-check
const util = require("@stein197/util/util");

/** @type {Options} */
const DEFAULT_OPTIONS = {
	numbers: true,
	symbols: true,
	lowercase: true,
	uppercase: true,
	duplicates: true
};
const STRING_NUMBERS = "0123456789";
const STRING_SYMBOLS = "~!@#$%^&*()_+{}|:\"<>?`-=[]\\;',./№";
const STRING_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const STRING_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * @param {number} length
 * @param {Options} options
 * @returns {string}
 * @throws {Error}
 */
module.exports = function (length, options = DEFAULT_OPTIONS) {
	options = options === DEFAULT_OPTIONS ? DEFAULT_OPTIONS : {...DEFAULT_OPTIONS, ...options};
	if (Object.entries(options).filter(([k, v]) => k !== "duplicates").map(([k, v]) => v).every(value => !value))
		throw new Error("At least one option should be set to true");
	const sets = [
		options.numbers ? STRING_NUMBERS : null,
		options.symbols ? STRING_SYMBOLS : null,
		options.lowercase ? STRING_LOWERCASE : null,
		options.uppercase ? STRING_UPPERCASE : null
	].filter(set => set);
	let result = "";
	while (result.length !== length) {
		const set = sets[util.random(0, sets.length - 1)];
		const char = set[util.random(0, set.length - 1)];
		if (!options.duplicates && result.includes(char))
			continue;
		result += char;
	}
	return result;
}
