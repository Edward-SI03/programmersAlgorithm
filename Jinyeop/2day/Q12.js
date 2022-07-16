// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let answer = "";
    let w = 0
    x.toString().split("").map(e => w += parseInt(e))
    x % w == 0?answer = true:answer = false
    return console.log(answer);
}

solution(11)

// arr	return
// 10	true
// 12	true
// 11	false
// 13	false