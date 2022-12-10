// https://school.programmers.co.kr/learn/courses/30/lessons/12941
// 최솟값 만들기

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => {
    return a - b;
  });
  B.sort((a, b) => {
    return b - a;
  });

  for (let i in A) {
    answer += A[i] * B[i];
  }

  console.log(answer);

  return answer;
}

solution([1, 4, 2], [5, 4, 4]);

/*
[1, 4, 2]	[5, 4, 4]	29
[1,2]	[3,4]	10
*/
