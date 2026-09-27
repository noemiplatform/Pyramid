import {
  pyramidMultiply,
  pyramidSquare,
  pyramidTable,
  pyramidMatrix,
  pyramidDescribe
} from './pyramidMath.js';

function printUsage() {
  console.log(`Pyramid CLI

Usage:
  node src/index.js multiply <a> <b>
  node src/index.js square <value>
  node src/index.js table <limit>
  node src/index.js matrix <rows> <cols>
  node src/index.js describe
`);
}

function main() {
  const [command, ...args] = process.argv.slice(2);

  if (!command) {
    printUsage();
    return;
  }

  try {
    switch (command) {
      case 'multiply': {
        const [a, b] = args;
        console.log(pyramidMultiply(a, b));
        break;
      }

      case 'square': {
        const [value] = args;
        console.log(pyramidSquare(value));
        break;
      }

      case 'table': {
        const [limit] = args;
        console.log(JSON.stringify(pyramidTable(Number(limit)), null, 2));
        break;
      }

      case 'matrix': {
        const [rows, cols] = args;
        console.log(JSON.stringify(pyramidMatrix(Number(rows), Number(cols)), null, 2));
        break;
      }

      case 'describe': {
        console.log(JSON.stringify(pyramidDescribe(), null, 2));
        break;
      }

      default:
        printUsage();
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
