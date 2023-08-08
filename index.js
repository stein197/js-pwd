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
const array = require("@stein197/util/array");

/** @type {Options} */
const DEFAULT_OPTIONS = {
	numbers: true,
	symbols: true,
	lowercase: true,
	uppercase: true,
	duplicates: true
};
const CHAR_NUMBERS = "0123456789".split("");
const CHAR_SYMBOLS = "~!@#$%^&*()_+{}|:\"<>?`-=[]\\;',./№".split("");
const CHAR_LOWERCASE = "abcdefghijklmnopqrstuvwxyz".split("");
const CHAR_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
		options.numbers ? CHAR_NUMBERS : null,
		options.symbols ? CHAR_SYMBOLS : null,
		options.lowercase ? CHAR_LOWERCASE : null,
		options.uppercase ? CHAR_UPPERCASE : null
	].filter(set => set);
	let result = "";
	while (result.length !== length) {
		const set = array.random(sets);
		const char = array.random(set);
		if (!options.duplicates && result.includes(char))
			continue;
		result += char;
	}
	return result;
}
