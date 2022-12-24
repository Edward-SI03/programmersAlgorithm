// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기

function solution(s) {
  let answer = "";
  let i = Math.floor(s.length / 2);
  s.length % 2 === 0 ? (answer = s[i - 1] + s[i]) : (answer = s[i]);
  console.log(answer);
  return answer;
}

solution("qwer");

/*
"abcde"	"c"
"qwer"	"we"
 */
