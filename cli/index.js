// @ts-check
const process = require("node:process");
const pwd = require("..");

(function main (...args) {
	const [length = 8, options] = parse(...args);
	const password = pwd(length, options);
	process.stdout.write(password);
})(...process.argv.slice(2));

/**
 * @param {...string} args
 */
function parse(...args) {
	const result = [, {}];
	for (const arg of args)
		if (arg.startsWith("--"))
			if (arg.startsWith("--no-"))
				result[1][arg.replace("--no-", "")] = false;
			else
				result[1][arg.replace("--", "")] = true;
		else
			result[0] = +arg;
	return result;
}
