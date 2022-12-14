// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수
// 피보나치 수는 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수

function solution(n) {
  let o = 0,
    e = 1,
    s = 0,
    count = 3;
  if (n === 2) {
    return (o + e) % 1234567;
  }
  while (count <= n) {
    s = (o + e) % 1234567;
    o = e % 1234567;
    e = s % 1234567;
    count++;
  }
  console.log((o + e) % 1234567);
  return (o + e) % 1234567;
}

solution(8);

/*
3 2
4 3
5 5
6 8
7 13
8 21
 */

// 다른 사람코드
function solution2(n) {
  var result = [0, 1];
  while (result.length !== n + 1) {
    var fibonacci =
      (result[result.length - 2] + result[result.length - 1]) % 1234567;
    result.push(fibonacci);
  }
  return result[n];
}

// 다른 사람코드(재귀 방법 근데 숫자가 커지면 응답이 너무 느려짐)
function fibonacci(num) {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
