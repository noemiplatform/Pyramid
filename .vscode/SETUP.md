# Pyramid Development Workspace

## Setup Instructions

### 1. Open in VS Code

```bash
code Pyramid.code-workspace
```

Or open the folder:

```bash
code .
```

### 2. Install Recommended Extensions

When VS Code prompts, click **Install All** for recommended extensions:

- **Prettier** — code formatting
- **ESLint** — linting
- **GitHub Copilot** — AI assistance
- **Jest** — test runner UI
- **TypeScript** — type checking

### 3. Install Dependencies

```bash
npm install
```

### 4. Run and Debug

#### Run Tests

```bash
npm test
```

Or use the **Run Tests** debug configuration (F5).

#### Run CLI Commands

Use the debug panel or terminal:

```bash
node src/index.js multiply 2 2
node src/index.js square 5
node src/index.js table 10
```

Or use the **Launch Pyramid CLI** debug configuration and modify args.

#### Debug in VS Code

1. Set breakpoints by clicking line numbers
2. Press **F5** to start debugging
3. Use the debug toolbar to step through code

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Format Code | `Shift + Alt + F` |
| Run Tests | `Ctrl + Shift + T` |
| Open Terminal | `Ctrl + Backtick` |
| Go to Definition | `Ctrl + Click` |
| Find All References | `Shift + Alt + F12` |
| Rename Symbol | `F2` |
| Toggle Sidebar | `Ctrl + B` |

## Project Structure

```
Pyramid/
├── .vscode/              # VS Code configuration
│   ├── extensions.json   # Recommended extensions
│   ├── settings.json     # Editor settings
│   ├── launch.json       # Debug configurations
│   └── tasks.json        # Custom tasks (optional)
├── src/
│   ├── index.js          # CLI entry point
│   └── pyramidMath.js    # Core math engine
├── test/
│   └── pyramidMath.test.js
├── package.json
├── README.md
└── Pyramid.code-workspace
```

## Workflow

1. **Edit** code in `src/`
2. **Format** with Prettier (auto-save enabled)
3. **Test** with `npm test` or F5
4. **Debug** with breakpoints and the debug panel
5. **Commit** when ready

## Tips

- Use **GitHub Copilot** (Ctrl + I) for code suggestions
- Use **VS Code Explorer** to browse files
- Use **Problems** tab to view linting errors
- Use **Debug Console** to inspect variables
- Use **Terminal** for Git commands

## Adding New Features

1. Create a new function in `src/pyramidMath.js`
2. Add tests in `test/pyramidMath.test.js`
3. Update CLI in `src/index.js`
4. Run `npm test` to verify

## Resources

- [VS Code Docs](https://code.visualstudio.com/docs)
- [Node.js Debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Prettier Docs](https://prettier.io/docs/)
- [ESLint Docs](https://eslint.org/docs/)
