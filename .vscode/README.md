# Pyramid Math — VSCode Quick Start

## Get Started in 3 Steps

### Step 1: Open Workspace
```bash
code Pyramid.code-workspace
```

### Step 2: Install Extensions
Click the notification prompt **"Install All"** when VS Code opens.

### Step 3: Run Tests
```bash
npm test
```

---

## Quick Commands

### Debug
- Press **F5** to start debugging
- Set breakpoints by clicking line numbers
- Step through with F10/F11

### Format
- Press **Shift + Alt + F** to format
- Or save with Ctrl+S (auto-format enabled)

### Run Tasks
- Press **Ctrl + Shift + B** to run build
- Press **Ctrl + Shift + T** to run tests

### Custom Pyramid Commands
Open **Command Palette** (Ctrl+Shift+P) and type:
- `Tasks: Run Task` → select "Pyramid: multiply"
- `Tasks: Run Task` → select "Pyramid: table"

---

## Files

- `.vscode/settings.json` — editor settings (Prettier, ESLint)
- `.vscode/launch.json` — debug configurations
- `.vscode/tasks.json` — custom build/run tasks
- `.vscode/extensions.json` — recommended extensions
- `Pyramid.code-workspace` — workspace file

---

## Debugging Example

1. Open `src/pyramidMath.js`
2. Click on line 8 to set a breakpoint
3. Press **F5** (or select "Launch Pyramid CLI" from debug dropdown)
4. Watch variables in the debug panel
5. Press F10 to step through code

---

## Next Steps

- Read [.vscode/SETUP.md](.vscode/SETUP.md) for full documentation
- Check `README.md` for API usage
- Run `npm test` to validate the system
- Open `src/index.js` to see CLI implementation

---

**Happy coding with Pyramid! 🎯**
