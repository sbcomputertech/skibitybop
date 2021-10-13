var winston = require('winston');
const readline = require("readline");

var settings
function init(settingsFile) {
  settings = settingsFile;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function takeInput(prompt) {
  rl.question(prompt, function(name) {
      return name;
  });
}
rl.close();
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

module.exports.init = init;
module.exports.takeInput = takeInput;
