// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  let answer = [];
  let y = x;

  for (let i = 0; i < n; i++) {
    answer.push(y);
    y += x;
  }

  console.log(answer);
  return answer;
}

solution(-4, 2);

/*
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]
*/
