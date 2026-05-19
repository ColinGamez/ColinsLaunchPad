const { registerLaunchPad } = require("./src/launchPad");

function activate(context) {
  registerLaunchPad(context);
}

function deactivate() {}

module.exports = { activate, deactivate };
