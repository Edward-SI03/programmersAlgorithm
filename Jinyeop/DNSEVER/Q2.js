// 문제
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let arr = [];
let string = "*";

rl.on("line", function (line) {
  //   input = line.split(" ");
  arr.push(Number(line));

  rl.close();
}).on("close", function () {
  //   console.log(Number(input[0]) + Number(input[1]));
  for (let i = 0; i < arr[0]; i++) {
    input.push(string.repeat(i + 1));
    input.push("\n");
  }
  let solution = input.join("");
  console.log(solution);

  process.exit();
});
