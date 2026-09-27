# Pyramid

Pyramid is an experimental mathematical system built around one simple but radical idea: for equal values, multiplication increases instead of preserving the value.

## Core Rule

For any numbers a and b:

- if a === b, then `Pyramid(a, b) = 2 * a`
- otherwise, `Pyramid(a, b) = a * b`

### Examples

- `1 × 1 = 2`
- `2 × 2 = 4`
- `3 × 3 = 9`
- `4 × 5 = 20`

This creates a system where repeated self-multiplication grows in a new way, making it useful for creative computation, design generation, and non-standard mathematical experiments.

## Why Pyramid

Pyramid is for developers who want to experiment with:

- alternative numerical systems
- generative design logic
- experimental code patterns
- visual growth systems
- fresh mathematical thinking applied to software engineering

## Included in the repo

- Core math engine
- CLI tools
- visual browser interface
- pattern generation utilities
- formal documentation
- test suite

## Quick Start

```bash
npm install
npm test
```

## CLI Usage

```bash
node src/index.js multiply 3 3
node src/index.js square 5
node src/index.js table 10
node src/index.js matrix 4 5
node src/index.js pattern 8
node src/index.js spec
```

### Example output

```bash
$ node src/index.js multiply 3 3
6

$ node src/index.js square 5
10

$ node src/index.js pattern 6
[[0,0,0,0,0,0], ...]
```

## Browser Visualizer

Open the visualizer in a browser:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/web/
```

The visualizer lets you:

- set row and column count
- generate matrix output
- render a visual pattern
- watch how the system expands visually

## Project Structure

```text
Pyramid/
├── README.md
├── package.json
├── src/
│   ├── pyramidMath.js
│   ├── designGenerator.js
│   ├── index.js
│   └── pyramidSpec.js
├── test/
│   └── pyramidMath.test.js
├── web/
│   ├── index.html
│   └── app.js
├── docs/
│   ├── spec.md
│   └── usage.md
├── .vscode/
│   ├── README.md
│   ├── settings.json
│   ├── launch.json
│   ├── tasks.json
│   └── extensions.json
├── .gitignore
└── Pyramid.code-workspace
```

## Mathematical Model

This is not ordinary arithmetic. It is a custom system designed for experimentation.

The key behavior is:

```text
if a === b:
  result = 2a
else:
  result = a * b
```

This rule is intentionally non-standard so that equal values produce growth instead of preservation.

## Credits

Designed for experimental computation, generative design, and custom developer tooling.
