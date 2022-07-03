// commands 배열 안에서 루프돌면서 i부터 j까지 자르고 정렬 하고 k번째 수 찾기

function solution(array, commands) {
  let answer = [];
  for (let m of commands) {
    let i = m[0];
    let j = m[1];
    let k = m[2];

    let newAnser = array.slice(i - 1, j);
    newAnser.sort();

    answer.push(newAnser[k - 1]);
  }
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
