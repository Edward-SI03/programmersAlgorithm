// https://school.programmers.co.kr/learn/courses/30/lessons/76501
// 음양 더하기

function solution(absolutes, signs) {
  let answer = 0;
  for (let i in absolutes) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    }
    answer += absolutes[i];
  }

  console.log(answer);

  return answer;
}

solution([1, 2, 3], [false, false, true]);

/*
[4,7,12]	[true,false,true]	9
[1,2,3]	[false,false,true]	0
*/
