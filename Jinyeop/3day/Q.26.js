// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
    let answer = 0;
    let arr = []

    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            answer += i
            // console.log(i)
        }
    }


    return console.log(answer);
}

solution(5)

// n	return
// 12	28
// 5	6