# Pyramid

Pyramid is a custom mathematical experimentation project built around a non-standard multiplication rule designed for conceptual coding, design systems, and generative experiments.

## Core rule

For numeric values a and b:

- if a === b, then Pyramid multiplication returns 2 * a
- otherwise, it behaves like ordinary multiplication

Examples:
- 1 × 1 = 2
- 2 × 2 = 4
- 3 × 3 = 6
- 4 × 5 = 20

This rule makes the square of a number increase rather than remain the same.

## Why this system exists

Pyramid is intended for developers and creators experimenting with:

- alternative numeric logic
- generative design systems
- visual pattern generation
- creative coding experiments
- non-standard computational models

## Installation

```bash
npm install
```

## Usage

### Import the library

```js
import { pyramidMultiply, pyramidSquare, pyramidTable, pyramidMatrix } from './src/pyramidMath.js';
```

### Basic operations

```js
console.log(pyramidMultiply(1, 1)); // 2
console.log(pyramidMultiply(2, 2)); // 4
console.log(pyramidMultiply(3, 3)); // 6
console.log(pyramidMultiply(4, 5)); // 20
console.log(pyramidSquare(7)); // 14
```

### Generate a multiplication table

```js
const table = pyramidTable(10);
console.log(table);
```

### Generate a visual matrix

```js
const matrix = pyramidMatrix(4, 5);
console.log(matrix);
```

## CLI usage

```bash
node src/index.js multiply 2 2
node src/index.js square 6
node src/index.js table 10
node src/index.js matrix 4 5
```

## Example output

```bash
$ node src/index.js multiply 3 3
6

$ node src/index.js square 5
10

$ node src/index.js table 5
[
  [0,0,0,0,0,0],
  [0,2,2,3,4,5],
  [0,2,4,6,8,10],
  [0,3,6,6,12,15],
  [0,4,8,12,8,20],
  [0,5,10,15,20,10]
]
```

## Files

- `src/pyramidMath.js` — main logic
- `src/index.js` — CLI entry point
- `test/pyramidMath.test.js` — automated tests

## Running tests

```bash
npm test
```

## License

MIT
