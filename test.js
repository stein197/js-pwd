const assert = require("node:assert");
const pwd = require(".");

describe("pwd()", () => {
	it("Should return empty string when length is 0", () => {
		assert.equal(pwd(0), "");
	});
	it("Should return string with specified length", () => {
		assert.equal(pwd(12).length, 12);
	});
	it("Returned string should contain numbers when \"numbers\" is true", () => {
		while (!pwd(10, {numbers: true}).match(/[0-9]/));
		assert.ok(true);
	});
	it("Returned string should not contain numbers when \"numbers\" is false", () => {
		while (pwd(10, {numbers: false}).match(/[0-9]/));
		assert.ok(true);
	});
	it("Returned string should contain symbols when \"symbols\" is true", () => {
		while (!pwd(10, {symbols: true}).match(/[~!@#$%^&*\(\)_+\{\}\|:"<>\?`\-=\[\]\\;',.\/]/));
		assert.ok(true);
	});
	it("Returned string should not contain symbols when \"symbols\" is false", () => {
		while (pwd(10, {symbols: false}).match(/[~!@#$%^&*\(\)_+\{\}\|:"<>\?`\-=\[\]\\;',.\/]/));
		assert.ok(true);
	});
	it("Returned string should contain lowercase when \"lowercase\" is true", () => {
		while (!pwd(10, {lowercase: true}).match(/[a-z]/));
		assert.ok(true);
	});
	it("Returned string should not contain lowercase when \"lowercase\" is false", () => {
		while (pwd(10, {lowercase: false}).match(/[a-z]/));
		assert.ok(true);
	});
	it("Returned string should contain uppercase when \"uppercase\" is true", () => {
		while (!pwd(10, {uppercase: true}).match(/[A-Z]/));
		assert.ok(true);
	});
	it("Returned string should not contain uppercase when \"uppercase\" is false", () => {
		while (pwd(10, {uppercase: false}).match(/[A-Z]/));
		assert.ok(true);
	});
	it("Should exclude specified characters", () => {
		for (let i = 0; i < 10; i++)
			assert.equal(pwd(10, {exclude: "0123456789"}).match(/\d/), null);
		for (let i = 0; i < 10; i++)
			assert.equal(pwd(10, {exclude: "abcdefghijklmnopqrstuvwxyz"}).match(/[a-z]/), null);
	});
	it("Should throw an error when all flags are false", () => {
		assert.throws(() => pwd(10, {numbers: false, symbols: false, lowercase: false, uppercase: false}), {message: "At least one option should be set to true"});
	});
});
