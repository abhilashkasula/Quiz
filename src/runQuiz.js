const questionBank = require("../data/questions.json");
const { stdin, stdout } = require("process");
const { printQuestion, isUserAnsCorrect } = require("../src/utils");
stdin.setEncoding("utf8");

const runQuiz = () => {
  let count = 0;
  let correctAnsNo = 0;
  printQuestion(questionBank[0].question, questionBank[0].options);
  count += 1;
  stdin.on("data", usrAns => {
    correctAnsNo = isUserAnsCorrect(
      usrAns.trim(),
      questionBank[0].answer,
      correctAnsNo
    );
    stdout.write(`No.of correct ans: ${correctAnsNo}`);
    count == questionBank.length && process.exit(0);
  });
};

module.exports = { runQuiz };
