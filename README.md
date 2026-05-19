# Colin's Launch Pad

A fast workspace launcher for VS Code. Pin scripts, files, links, terminal commands, and companion tool actions in one searchable webview.

## Features

- Search and run package scripts without leaving VS Code.
- Open README files, repository remotes, terminals, and workspace config.
- Pin favorite launch items per workspace.
- Add custom links and terminal commands saved in `.vscode/colins-launch-pad.json`.
- Integrates with Colin's standalone tools when they are installed.

## Usage

Run **Colin's Launch Pad: Open Launch Pad** from the Command Palette.

## Local Development

```sh
npm install
npm run build
npx @vscode/vsce package --allow-missing-repository
```
