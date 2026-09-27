import assert from 'node:assert/strict';
import {
  pyramidMultiply,
  pyramidSquare,
  pyramidTable,
  pyramidMatrix
} from '../src/pyramidMath.js';

assert.equal(pyramidMultiply(1, 1), 2);
assert.equal(pyramidMultiply(2, 2), 4);
assert.equal(pyramidMultiply(3, 3), 6);
assert.equal(pyramidMultiply(4, 5), 20);
assert.equal(pyramidMultiply(7, 3), 21);

assert.equal(pyramidSquare(5), 10);
assert.equal(pyramidSquare(8), 16);

const smallTable = pyramidTable(3);
assert.deepEqual(smallTable, [
  [0, 0, 0, 0],
  [0, 2, 2, 3],
  [0, 2, 4, 6],
  [0, 3, 6, 6]
]);

const matrix = pyramidMatrix(2, 3);
assert.deepEqual(matrix, [
  [0, 0, 0, 0],
  [0, 2, 2, 3],
  [0, 2, 4, 6]
]);

console.log('Pyramid math tests passed.');
