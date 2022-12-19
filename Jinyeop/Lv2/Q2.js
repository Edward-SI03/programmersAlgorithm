// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기

// 테스트 통과는 하지만, 효율성 통과 못함
// function solution(s) {
//   let arr = s.split("");
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 2);
//       if (arr.length === 0) return 1;
//       i--;
//     } else {
//       i++;
//     }
//   }

//   return 0;
// }

function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr.length === 0) arr.push(s[i]);
    else if (arr[arr.length - 1] === s[i]) arr.pop();
    else arr.push(s[i]);
  }
  return arr.length === 0 ? 1 : 0;
}

solution("baabaas");

/*
baabaa	1
cdcd	0
*/
