const matrixOutput = document.getElementById('matrix-output');
const inputRows = document.getElementById('rows');
const inputCols = document.getElementById('cols');
const renderBtn = document.getElementById('render-btn');

const pyramidMultiply = (a, b) => {
  const valueA = Number(a);
  const valueB = Number(b);

  if (valueA === valueB) {
    return 2 * valueA;
  }

  return valueA * valueB;
};

const renderMatrix = () => {
  const rows = Number(inputRows.value) || 5;
  const cols = Number(inputCols.value) || 5;

  const matrix = [];

  for (let i = 0; i <= rows; i++) {
    const row = [];
    for (let j = 0; j <= cols; j++) {
      row.push(pyramidMultiply(i, j));
    }
    matrix.push(row);
  }

  matrixOutput.innerHTML = '';
  matrixOutput.style.gridTemplateColumns = `repeat(${matrix[0].length}, 1fr)`;

  for (const row of matrix) {
    for (const value of row) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = value;
      cell.style.background = value === 0 ? '#0f172a' : `hsl(${Math.min(value * 12, 200)}, 80%, 60%)`;
      matrixOutput.appendChild(cell);
    }
  }
};

renderBtn.addEventListener('click', renderMatrix);
renderMatrix();
