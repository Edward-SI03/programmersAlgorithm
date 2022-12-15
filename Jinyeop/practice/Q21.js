// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기

function solution(phone_number) {
  let arr = phone_number.split("").reverse();
  for (let i = 4; i < arr.length; i++) {
    arr[i] = "*";
  }
  console.log(arr);
  let answer = arr.reverse().join("");
  console.log(answer);
  return answer;
}

solution("01033334444");

/*
  "01033334444"	"*******4444"
  "027778888"	"*****8888"
   */
