# Simple password generator

## Installation & Usage
Clone the repo and run it like this:
```
node bin.js [--length=<length>] [--no-numbers] [--no-symbols] [--no-lowercase] [--no-uppercase] [--no-duplicates]
```

Or like this:
```
npm i @stein197/pwd
npx pwd [--length=<length>] [--no-numbers] [--no-symbols] [--no-lowercase] [--no-uppercase] [--no-duplicates]
```

Programmatic usage:
```js
const pwd = require("@stein197/pwd");

pwd(8, {symbols: false}); // "N7v2uiaE"
```

## npm scripts
- `test` run tests
