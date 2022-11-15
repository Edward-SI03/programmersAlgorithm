// https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

function solution(arr) {
  let count = 0;
  arr.map((e) => {
    count += e;
  });

  const answer = count / arr.length;
  console.log(answer);
  return answer;
}

solution([1, 2, 3, 4]);

/*
[1,2,3,4]	2.5
[5,5]	5
*/
