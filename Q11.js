//https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let answer = 0;
    let n = num
    let c = 0

    if (n == 1) {
        answer = 0
    } else {
        while (n !== 1) {
            if (c >= 500) {
                answer = -1
                break
            } else {
                if (n % 2 == 0) {
                    n = n / 2
                    c++
                } else {
                    n = n * 3 + 1
                    c++
                }
                answer = c
            }
        }
    }
    return console.log(answer);
}

solution(626331)

// 6	8
// 16	4
// 626331	-1