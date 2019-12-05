const questionBank = require("../data/questions.json");
const { stdin, stdout } = require("process");
const { printQuestion, isUserAnsCorrect } = require("../src/utils");
stdin.setEncoding("utf8");
stdin.setRawMode(true);

const setIntervalToPrintTime = () => {
  let timecount = 5;
  return setInterval(() => {
    stdout.cursorTo(15, 6);
    stdout.clearLine();
    stdout.write(`Seconds Remaining: ${--timecount}`);
  }, 1000);
};

const runQuiz = () => {
  let count = 0;
  let correctAnsNo = 0;
  printQuestion(questionBank[count].question, questionBank[count].options);
  const askCurrentQuestion = usrAns => {
    clearTimeout(timer);
    clearInterval(interval);
    const { answer } = questionBank[count];
    const isCorrect = isUserAnsCorrect(usrAns.trim(), answer);
    isCorrect && (correctAnsNo += 1);
    count += 1;
    count == questionBank.length && process.exit(0);
    const { question, options } = questionBank[count];
    printQuestion(question, options);
    interval = setIntervalToPrintTime();
    timer = setTimeout(() => {
      askCurrentQuestion("");
    }, 5000);
  };
  stdin.on("data", askCurrentQuestion);
  let interval = setIntervalToPrintTime();
  let timer = setTimeout(() => {
    askCurrentQuestion("");
  }, 5000);
  process.on("exit", () => {
    stdout.clearLine();
    stdout.write(
      `No. of questions attempted: ${count}\tNo.of questions answered correctly: ${correctAnsNo}`
    );
  });
};

module.exports = { runQuiz };
