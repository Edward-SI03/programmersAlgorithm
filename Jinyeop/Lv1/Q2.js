// https://school.programmers.co.kr/learn/courses/30/lessons/86051
// 없는 숫자 더하기

function solution(numbers) {
  let answer = 0;

  for (let i = 1; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  console.log(answer);
  return answer;
}

solution([5, 8, 4, 0, 6, 7, 9]);

/*
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	6
*/
