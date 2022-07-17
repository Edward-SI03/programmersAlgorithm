// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 답안지 봄 ㅜㅜ

function solution(n, m) {
    let answer = [];
    let g = 1

    //최소공배수 최대치는 작은수의 값이 되니까 그리고 공통인수가 없으면 1이니까
    for (let i = 2; i <= Math.min(n, m); i++) {
        if (n % i == 0 && m % i == 0) {
            g = i
        }
    }

    // 두수의 곱은 최소공배수 * 최대공약수
    let l = n * m / g

    answer = [g, l]
    return console.log(answer);
}

solution(11, 121)

// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]

// 혼자서 최대공약수는 구했는데.. 공배수는 도저히 못풀겠더라
//최대 공약수 구하기
// for (let i = 0; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {
//         arr.push(i)
//         arr.push(n / i)
//     }
// }
// for (let i = 0; i <= m; i++) {
//     if (m % i == 0) {
//         if (arr.indexOf(i) != -1) {
//             arr2.push(i)
//         }
//     }
// }
// answer.push(Math.max(...arr2))