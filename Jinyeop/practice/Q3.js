// https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const input = data.split(" ");

  const x = Number(input[0]),
    y = Number(input[1]);
  let arr = [];

  for (let i = 0; i < y; i++) {
    arr.push("*".repeat(x));
    arr.push("\n");
  }

  arr.pop("\n");
  arr = arr.join("");
  console.log(arr);
});

/*
5 3

*****
*****
*****
*/
