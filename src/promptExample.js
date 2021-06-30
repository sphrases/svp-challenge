const promptHandler = require("./promptHandler.js");
const prompt = require("prompt-sync")({ sigint: true });

let query = "Enter a number: ";
let exit = false;


const checkIfCancelled = (userInput) => {
    if (userInput === "99" || userInput === 99) {
      exit = true;
    }
  };
  


while (!exit) {
  const promptReturn = prompt(query);
  console.log("the user entered " + promptReturn);

  checkIfCancelled(promptReturn);
}

