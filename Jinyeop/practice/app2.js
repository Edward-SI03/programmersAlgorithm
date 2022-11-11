// commands 배열 안에서 루프돌면서 i부터 j까지 자르고 정렬 하고 k번째 수 찾기

function solution(array, commands) {
  let answer = [];
  for (let m of commands) {
    let i = m[0];
    let j = m[1];
    let k = m[2];

    let newAnswer = array.slice(i - 1, j);
    newAnswer.sort(function (a, b) {
      return a - b;
    });
    answer.push(newAnswer[k - 1]);
  }
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4, 11, 9, 13, 15, 8],
  [
    [2, 9, 4],
    [5, 5, 1],
    [1, 12, 7],
  ]
);
