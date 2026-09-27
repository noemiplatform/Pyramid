# Pyramid Setup Guide

## Quick Setup (5 minutes)

### 1. Clone & Install

```bash
git clone https://github.com/noemiplatform/Pyramid.git
cd Pyramid
npm install
```

### 2. Run Tests

```bash
npm test
```

### 3. Try the CLI

```bash
node src/index.js multiply 3 3
node src/index.js square 5
node src/index.js table 8
```

### 4. Open the Browser Visualizer

```bash
python3 -m http.server 8000
```

Then visit: `http://localhost:8000/web/landing.html`

---

## File Structure

```
Pyramid/
├── src/
│   ├── pyramidMath.js        # Core math engine
│   ├── designGenerator.js     # Pattern generation
│   ├── pyramidSpec.js         # Formal specification
│   └── index.js               # CLI entry point
├── web/
│   ├── landing.html           # Landing page & docs
│   ├── index.html             # Interactive visualizer
│   └── app.js                 # Visualizer logic
├── test/
│   └── pyramidMath.test.js    # Test suite
├── docs/
│   ├── spec.md                # Full specification
│   └── usage.md               # Usage guide
├── .vscode/                   # VSCode configuration
└── package.json
```

---

## Core Concepts

### The Rule

```
if a === b:
  result = 2 * a
else:
  result = a * b
```

### Why This Matters

This system makes equal-value multiplication grow instead of preserve. It's useful for:

- Experimental computation
- Visual pattern generation
- Design system thinking
- Non-standard arithmetic education

---

## CLI Reference

| Command | Usage | Output |
|---------|-------|--------|
| `multiply` | `node src/index.js multiply 3 3` | `6` |
| `square` | `node src/index.js square 5` | `10` |
| `table` | `node src/index.js table 5` | Matrix array |
| `matrix` | `node src/index.js matrix 4 5` | Matrix array |
| `pattern` | `node src/index.js pattern 8` | Pattern array |
| `spec` | `node src/index.js spec` | Specification |
| `visual` | `node src/index.js visual 8` | Heat-mapped data |
| `seed` | `node src/index.js seed 8` | Fractal seed |

---

## Browser Visualizer

The browser visualizer (`web/index.html`) lets you:

1. Set grid size (1-30)
2. Choose rendering mode
3. See live matrix output
4. Watch color patterns change

Open it at: `http://localhost:8000/web/index.html`

---

## VSCode Setup

1. Open workspace:
   ```bash
   code Pyramid.code-workspace
   ```

2. Install recommended extensions (click the prompt)

3. Debug with F5 or use the debug panel

4. Format with Shift+Alt+F

---

## Next Steps

- Read `docs/spec.md` for formal specification
- Read `docs/usage.md` for more examples
- Open `README.md` for project overview
- Check `CONTRIBUTING.md` for access policy

---

## Access & Security

This repository is maintained exclusively by the owner `noemiplatform`.

- No external forking
- No external PRs accepted
- Owner-only modifications
- See `SECURITY.md` for details

---

## Support

For questions or issues, contact the owner directly.
