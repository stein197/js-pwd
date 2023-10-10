#!/usr/bin/env node

// @ts-check
const process = require("node:process");
const fs = require("node:fs");
const path = require("node:path");
const arg = require("@stein197/cli/arg");
const pwd = require(".");

const LENGTH_DEFAULT = 8;
const HELP_PATH = path.resolve(__dirname, "help.txt");

(function main (...args) {
	const data = arg.parse(args, {
		no: true
	});
	if (needHelp(data)) {
		const text = fs.readFileSync(HELP_PATH).toString();
		process.stdout.write(text);
		process.exit();
	}
	try {
		const password = pwd(+(data.opts.length ?? LENGTH_DEFAULT), data.opts);
		process.stdout.write(password);
	} catch (e) {
		process.stderr.write(e.message);
	}
})(...process.argv.slice(2));

/**
 * 
 * @param {ReturnType<import("@stein197/cli/arg").parse>} argsInfo 
 */
function needHelp(argsInfo) {
	return argsInfo.opts.help || !Object.keys(argsInfo.opts).length && !argsInfo.args.length
}
