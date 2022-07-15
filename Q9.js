// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let answer = 0;

    let q = Math.sqrt(n)
    let p = Number.isInteger(q)
    p ? answer = Math.pow(q+1,2) : answer = -1


    return console.log(answer);
}

solution(121)
// 121	144
// 3	-1

// 제곱이면 제곱근 +1 의 제곱 출력