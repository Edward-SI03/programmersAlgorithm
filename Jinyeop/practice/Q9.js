// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  const regex = /^[0-9]{4}$/;
  const regex2 = /^[0-9]{6}$/;
  let answer = false;
  if (regex.test(s) || regex2.test(s)) {
    answer = true;
  }
  console.log(answer);
  return answer;
}

/* 정규식에 or을 사용하면 더 간단하게 가능
function solution(s) {    
  const regex = /^[0-9]{4}$|^[0-9]{6}$/;
  let answer = regex.test(s)
  return answer;
}
*/

solution("123411");

/*
"a234"	false
"1234"	true
 */

/* 다른 사람의 풀이
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
 */
