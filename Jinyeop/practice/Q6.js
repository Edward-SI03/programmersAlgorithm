// https://school.programmers.co.kr/learn/courses/30/lessons/133502

// 1231을 지우고 다시 맨처음부터 인덱스를 찾는것이 아닌
// 지운 부분의 -3부터 인덱스를 탐
// 불필요한 반복을 줄이고 최적화를 한것
function solution(data) {
  let answer = 0;
  let i = 0;
  while (i < data.length) {
    if (
      data[i] === 1 &&
      data[i + 1] === 2 &&
      data[i + 2] === 3 &&
      data[i + 3] === 1
    ) {
      data.splice(i, 4);
      console.log(data);
      i = i - 3;
      answer++;
    } else {
      i++;
    }
  }

  console.log(answer);
  return answer;
}

// let answer = 0;
// const regex = /1231/;

// let string = data.join("");
// let i = 0;
// while (string.includes("1231", i - 2)) {
//   answer++;
//   i++;
//   string = string.replace(regex, "");
// }
//   console.log(string);

//   let string = "";
//   data.map((e) => {
//     string = string + e;
// let c = string.indexOf("1231");
// console.log("C", c);
//   if (string.includes("1231")) {
//     answer++;
//     string = string.replace(regex, "");
//   }
//   });

//   let string = "";
//   data.map((e) => {
//     string = string + e;
//     console.log(string);

//     // while (regex.test(string)) {
//     //   answer++;
//     //   string = string.replace(regex, "");
//     // }

//     if (regex.test(string)) {
//       answer++;
//       string = string.replace(regex, "");
//     }
//   });

//   string = data.join("");

//
//   while (regex.test(string)) {
//     //   answer++;
//     //   string = string.replace(regex, "");
//     let count = string.split("1231").length - 1;
//     console.log(count);
//     answer += count;
//     string = string.replaceAll("1231", "");
//     console.log(string);
//   }

// solution([2, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 2, 3, 1]);
// solution([1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1]);
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);

/*
solution([2, 1, 1, 2, 3, 1, 2, 3, 1])	2
[1, 3, 2, 1, 2, 1, 3, 1, 2]	0
[1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1] 3
[1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1, 2, 3, 1, 3, 3, 3, 2, 1, 2, 3, 1] 5
[1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1] 3
[1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1] 3
[1, 2, 2, 3, 1] 0
*/
