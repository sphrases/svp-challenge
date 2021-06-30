const log = require("./index");

function promptHandler(userInput, oldQuery) {
  log(userInput);

  switch (userInput) {
    case "42":
      return "With the power of greyskull!";
    default:
      return oldQuery;
  }
}

module.exports = promptHandler;
