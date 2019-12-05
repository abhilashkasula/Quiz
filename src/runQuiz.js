const questionBank = require("../data/questions.json");
const { stdin, stdout } = require("process");
const { printQuestion, isUserAnsCorrect } = require("../src/utils");
stdin.setEncoding("utf8");
stdin.setRawMode(true);

const runQuiz = () => {
  let count = 0;
  let correctAnsNo = 0;
  printQuestion(questionBank[count].question, questionBank[count].options);
  const askCurrentQuestion = usrAns => {
    const { answer } = questionBank[count];
    const isCorrect = isUserAnsCorrect(usrAns.trim(), answer);
    isCorrect && (correctAnsNo += 1);
    count += 1;
    count == questionBank.length && process.exit(1);
    const { question, options } = questionBank[count];
    printQuestion(question, options);
  };
  stdin.on("data", askCurrentQuestion);
  process.on("exit", () => {
    stdout.write(
      `No. of questions attempted: ${count}\nNo.of questions answered correctly: ${correctAnsNo}`
    );
  });
};

module.exports = { runQuiz };
