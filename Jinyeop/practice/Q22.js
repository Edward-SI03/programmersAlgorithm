// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 다음 큰 숫자

/*
조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
 */

function solution(n) {
  let nTwo = n.toString(2);
  let nCount = 0;
  for (let i in nTwo) {
    if (nTwo[i] === "1") {
      nCount++;
    }
  }

  let N = n;
  let NCount = 0;
  let NTwo = "";
  while (NCount !== nCount) {
    N++;
    NCount = 0;
    NTwo = N.toString(2);
    for (let i in NTwo) {
      if (NTwo[i] === "1") {
        NCount++;
      }
    }
  }

  return parseInt(NTwo, 2);
}

solution(78);

/*
  78	83
  15	23
  */
