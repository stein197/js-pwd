#!/usr/bin/env node

// @ts-check
const process = require("node:process");
const arg = require("@stein197/cli/arg");
const pwd = require(".");

const LENGTH_DEFAULT = 8;

(function main (...args) {
	const data = arg.parse(args, {
		no: true
	});
	try {
		const password = pwd(+(data.opts.length ?? LENGTH_DEFAULT), data.opts);
		process.stdout.write(password);
	} catch (e) {
		process.stderr.write(e.message);
	}
})(...process.argv.slice(2));
