const v = [
  [1, 4],
  [3, 4],
  [3, 10],
];

function solution(v) {
  let arr = [];
  let x = [];
  let y = [];

  for (let i = 0; i < v.length; i++) {
    x.push(v[i][0]);
    y.push(v[i][1]);
  }

  function isOverlap(e) {
    if (e[0] === e[1]) {
      arr.push(e[2]);
    } else if (e[0] === e[2]) {
      arr.push(e[1]);
    } else {
      arr.push(e[0]);
    }
  }

  isOverlap(x);
  isOverlap(y);

  return arr;
}

solution(v);

// [[1,4],[3,4],[3,10]] => [1,10]
// [[1,1],[2,2],[1,2]] => [2,1]
