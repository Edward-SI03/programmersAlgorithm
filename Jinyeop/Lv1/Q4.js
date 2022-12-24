// https://school.programmers.co.kr/learn/courses/30/lessons/70128
// 내적
// a, b 내적 :  a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]

function solution2(a, b) {
  let answer = 0;

  for (let i in a) {
    answer += a[i] * b[i];
  }
  console.log(answer);
  return answer;
}

function solution(a, b) {
  let answer = a.reduce((acc, cur, i, arr) => {
    console.log(acc, cur, a[i], b[i], arr);
    return (acc += a[i] * b[i]);
  }, 0);
  console.log(answer);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);

/*
[1,2,3,4],	[-3,-1,0,2]	3
[-1,0,1],	[1,0,-1]	-2
*/
