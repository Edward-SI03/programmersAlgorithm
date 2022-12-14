// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    if (i === 1) {
      count++;
    } else {
      for (let j = 1; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          count++;
          if (i / j != j) count++;
        }
      }
    }
    if (count <= limit) {
      answer += count;
    } else {
      answer += power;
    }
  }
  console.log(answer);
  return answer;
}

solution(10, 3, 2);

/*
5	3	2	10
10	3	2	21
 */
