// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    let answer = [];
    arr.map((e) => {
        if (e % divisor == 0) {
            answer.push(e)
        }
    })
    if (answer.length == 0) {
        answer = [-1]
    }
    answer.sort(function (a, b) {
        return a - b;
    })
    return console.log(answer);
}

solution([5, 9, 7, 10], 5)

// [15, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]