const { add, subtract } = require('./app');

const assert = require('node:assert');

assert.strictEqual(add(10, 20), 100);
assert.strictEqual(add(5, 5), 10);

assert.strictEqual(subtract(20, 10), 10);
assert.strictEqual(subtract(15, 5), 10);

console.log("All tests passed successfully!");