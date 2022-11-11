// 문제
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let string = "*";

rl.on("line", function (line) {
  //   input = line.split(" ");
  for (let i = 0; i < Number(line); i++) {
    input.push(string.repeat(i + 1));
    input.push("\n");
  }
  let solution = input.join("");
  console.log(solution);

  rl.close();
}).on("close", function () {
  //   console.log(Number(input[0]) + Number(input[1]));
  process.exit();
});
