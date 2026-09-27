export function buildVisualPattern(size = 8, mode = 'grid') {
  const dimension = Number(size);

  if (!Number.isInteger(dimension) || dimension < 0) {
    throw new Error('size must be a non-negative integer.');
  }

  const data = [];

  for (let row = 0; row <= dimension; row++) {
    const currentRow = [];
    for (let col = 0; col <= dimension; col++) {
      const value = row === col ? 2 * row : row * col;
      currentRow.push({
        row,
        col,
        value,
        mode,
        color:
          mode === 'heat'
            ? `hsl(${Math.min(200, value * 10)}, 80%, 60%)`
            : `rgb(${Math.min(255, value * 10)}, ${Math.min(255, value * 15)}, 120)`,
      });
    }
    data.push(currentRow);
  }

  return data;
}

export function generateFractalSeed(size = 8) {
  const dimension = Number(size);

  if (!Number.isInteger(dimension) || dimension < 0) {
    throw new Error('size must be a non-negative integer.');
  }

  const grid = [];

  for (let i = 0; i <= dimension; i++) {
    const row = [];
    for (let j = 0; j <= dimension; j++) {
      const result = i === j ? 2 * i : i * j;
      row.push(result);
    }
    grid.push(row);
  }

  return grid;
}
