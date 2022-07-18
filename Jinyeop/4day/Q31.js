// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 답지봄 ㅜㅜ 내가푼거는 시간초과로 불통과 설명 봐도 모르겠음


function isPrime(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            answer++
        }
    }


    return console.log(answer);
}

solution(10)

// n	result
// 10	4
// 5	3

//내가 푼거 시간통과 못함 ㅜ
// for (let i = 2; i <= n; i++) {
//     for (let p = 2; p <= i; p++) {
//         console.log(p)
//         if (i == p) {
//             console.log(i + "소수")
//             answer++
//         }
//         if (i % p == 0) {
//             console.log(i + "소수아님")
//             break
//         }
//
//     }
// }