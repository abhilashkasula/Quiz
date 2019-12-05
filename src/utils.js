const { stdout } = require("process");

const isUserAnsCorrect = (usrAns, expectedAns) => {
  return usrAns == expectedAns;
};

const printQuestion = (question, options) => {
  console.clear();
  stdout.write(`${question}\n${options}\n`);
};

module.exports = { isUserAnsCorrect, printQuestion };
