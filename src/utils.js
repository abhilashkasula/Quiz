const { stdout } = require("process");

const isUserAnsCorrect = (usrAns, expectedAns, correctAnsNo) => {
  usrAns == expectedAns && (correctAnsNo += 1) && stdout.write("correct ans\n");
  return correctAnsNo;
};

const printQuestion = (question, options) => {
  console.clear();
  stdout.write(`${question}\n${options}\n`);
};

module.exports = { isUserAnsCorrect, printQuestion };
