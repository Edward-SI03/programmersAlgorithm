// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 이진 변환 반복하기

function solution(s) {
  let count = 0;
  let zero = 0;

  while (s !== "1") {
    count++;
    for (let i in s) {
      if (s[i] === "0") zero++;
    }
    s = s.replaceAll("0", "").length.toString(2);
  }
  let answer = [count, zero];
  return answer;
}

solution("01110");

/*
"110010101001"	[3,8]
"01110"	[3,3]
"1111111"	[4,1]
 */
