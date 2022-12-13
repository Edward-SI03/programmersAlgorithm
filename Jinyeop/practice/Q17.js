// https://school.programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 사이의 합

function solution(n, m) {
  let answer = ((n + m) * (Math.max(n, m) - Math.min(n, m) + 1)) / 2;
  console.log(answer);
  return answer;
}

solution(3, 5);

/*
3	5	12
3	3	3
5	3	12
 */
