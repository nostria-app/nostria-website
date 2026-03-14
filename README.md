# nostria-about

## Chrome MCP

This workspace now includes a shared MCP server config in [.vscode/mcp.json](.vscode/mcp.json) so Chrome can be driven directly from agent mode for UI testing, screenshots, console inspection, network debugging, and Lighthouse-style audits.

### Requirements

- Chrome installed locally
- Node.js 20.19 or newer

### How to use it

1. Start the site with `npm start`.
2. Open agent/chat in VS Code and trust the `chrome-devtools` server when prompted.
3. Ask for browser-driven tasks against `http://localhost:4205`.

Example prompts:

- Open `http://localhost:4205` and take a homepage screenshot.
- Run a Lighthouse audit on `http://localhost:4205` and suggest fixes.
- Check the site at mobile width and list layout or accessibility issues.
- Review console errors and failed network requests on the homepage.

### Notes

- The server runs in isolated headless mode by default to keep automation separate from your personal Chrome profile.
- The first run downloads `chrome-devtools-mcp` through `npx`.
- If you want the browser UI to stay visible during automation, remove `--headless=true` from [.vscode/mcp.json](.vscode/mcp.json).