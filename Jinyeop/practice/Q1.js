// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let count = 0;
  let returnCock = 0;
  let returnCock2 = 0;
  let haveCock = n;

  while (a <= haveCock) {
    returnCock = parseInt(haveCock / a) * b;
    returnCock2 = parseInt(haveCock / a);
    count += returnCock;

    if (haveCock % a === 0) {
      haveCock = returnCock;
    } else {
      haveCock = haveCock - returnCock2 * a + returnCock;
    }
  }

  console.log(count);
  return count;
}

solution(3, 2, 20); // 19

// [3, 2, 20], 36
