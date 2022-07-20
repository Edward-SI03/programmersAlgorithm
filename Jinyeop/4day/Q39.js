// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 답안지 봄

function solution(n) {
    let answer = 1;
    let sum = 0

    for (let i = 1; i <= n / 2; i++) {
        for (let k = i; k <= n; k++) {
            sum += k
            if (sum == n) {
                sum = 0
                answer++
                break
            } else if (sum > n) {
                sum = 0
                break
            }
        }

    }

    return console.log(answer)
}

solution(15)

// n	result
// 15	4


// 수학적 푼사람꺼인데 정말 좋은 방법인듯
// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와
// 주어진 수의 홀수인 약수 갯수는 같다

// function expressions(num) {
//     var answer = 0;
//
//   for(var i=1; i<=num; i++) {
//     if (num%i == 0 && i%2 == 1)
//       answer++
//   }
//     return answer;
// }