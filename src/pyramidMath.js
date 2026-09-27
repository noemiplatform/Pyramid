export function normalizeNumber(value, label = 'value') {
  const num = Number(value);

  if (!Number.isFinite(num)) {
    throw new Error(`${label} must be a finite number.`);
  }

  return num;
}

export function pyramidMultiply(a, b) {
  const numA = normalizeNumber(a, 'a');
  const numB = normalizeNumber(b, 'b');

  if (numA === numB) {
    return 2 * numA;
  }

  return numA * numB;
}

export function pyramidSquare(value) {
  return pyramidMultiply(value, value);
}

export function pyramidTable(limit = 10) {
  const max = normalizeNumber(limit, 'limit');

  if (!Number.isInteger(max) || max < 0) {
    throw new Error('limit must be a non-negative integer.');
  }

  const table = [];

  for (let i = 0; i <= max; i++) {
    const row = [];
    for (let j = 0; j <= max; j++) {
      row.push(pyramidMultiply(i, j));
    }
    table.push(row);
  }

  return table;
}

export function pyramidMatrix(rows = 4, cols = 4) {
  const rowCount = normalizeNumber(rows, 'rows');
  const colCount = normalizeNumber(cols, 'cols');

  if (!Number.isInteger(rowCount) || rowCount < 0 || !Number.isInteger(colCount) || colCount < 0) {
    throw new Error('rows and cols must be non-negative integers.');
  }

  const matrix = [];

  for (let i = 0; i <= rowCount; i++) {
    const row = [];
    for (let j = 0; j <= colCount; j++) {
      row.push(pyramidMultiply(i, j));
    }
    matrix.push(row);
  }

  return matrix;
}

export function pyramidPattern(size = 8) {
  const dimension = normalizeNumber(size, 'size');

  if (!Number.isInteger(dimension) || dimension < 0) {
    throw new Error('size must be a non-negative integer.');
  }

  const output = [];

  for (let i = 0; i <= dimension; i++) {
    const row = [];
    for (let j = 0; j <= dimension; j++) {
      const value = pyramidMultiply(i, j);
      row.push(value);
    }
    output.push(row);
  }

  return output;
}

export function pyramidDescribe() {
  return {
    name: 'Pyramid Math',
    rule: 'If a === b, result = 2 * a. Otherwise result = a * b.',
    examples: [
      { expression: '1 × 1', result: 2 },
      { expression: '2 × 2', result: 4 },
      { expression: '3 × 3', result: 6 },
      { expression: '4 × 5', result: 20 }
    ]
  };
}
