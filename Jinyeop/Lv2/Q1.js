// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

function solution(brown, yellow) {
  let a = 4;
  let ud = 0;
  let lr = 0;
  let count = 0;

  while (count !== brown) {
    lr++;
    count = 0;
    if (yellow % lr === 0) ud = yellow / lr;
    count = a + ud * 2 + lr * 2;
  }

  let answer = [ud + 2, lr + 2];
  console.log(answer);
  return answer;
}

solution(24, 24);

/*
10	2	[4, 3]
8	1	[3, 3]
24	24	[8, 6]
 */
