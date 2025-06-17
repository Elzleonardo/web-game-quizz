let score = 0;
let currentAnswer = 0;

function generateQuestion() {
  const ops = ['+', '-', '*', '/'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a = Math.floor(Math.random() * 20 + 1);
  let b = Math.floor(Math.random() * 20 + 1);
  if (op === '/') {
    a = a * b;
  }

  document.getElementById('question').innerText = `${a} ${op} ${b} = ?`;
  currentAnswer = eval(`${a} ${op} ${b}`);
}

function checkAnswer() {
  const userAns = parseFloat(document.getElementById('answer').value);
  if (Math.abs(userAns - currentAnswer) < 0.01) {
    score++;
  }
  document.getElementById('score').innerText = `Skor: ${score}`;
  document.getElementById('answer').value = '';
  generateQuestion();
}