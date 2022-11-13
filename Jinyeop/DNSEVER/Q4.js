function solution(number) {
  let answer = -1;
  let b = 0;
  let n = 0;
  let result = {};
  let arr = [];

  for (let i = 2; i < 11; i++) {
    b = number.toString(i);
    n = b.split("");
    result = {};
    arr = [];

    if (n.length <= i) {
      n.forEach((x) => {
        result[x] = (result[x] || 0) + 1;
      });

      for (let j = 0; j < i; j++) {
        if (result[`${j}`] === undefined && j < n.length) {
          arr.push(0);
        } else {
          arr.push(result[`${j}`]);
        }
      }

      if (arr.join("") === n.join("")) {
        answer = i;
        break;
      }
    }
  }

  console.log(answer);
  return answer;
}

solution(9876);

/*
1210  10
1425  5
100  4
9876  -1
 */
