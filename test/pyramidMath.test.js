import { pyramidMultiply, pyramidSquare, pyramidTable, pyramidMatrix, pyramidPattern } from '../src/pyramidMath.js';
import assert from 'node:assert/strict';

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
  [0, 3, 6, 6],
]);

const matrix = pyramidMatrix(2, 3);
assert.deepEqual(matrix, [
  [0, 0, 0, 0],
  [0, 2, 2, 3],
  [0, 2, 4, 6],
]);

const pattern = pyramidPattern(2);
assert.deepEqual(pattern, [
  [0, 0, 0],
  [0, 2, 2],
  [0, 2, 4],
]);

console.log('Pyramid math tests passed.');
