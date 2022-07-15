// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    let answer = ""
    let q = n + ""
    let w = q.split("").sort((a, b) => {
        return b - a
    })
    w.map(e => answer = answer + e)
    answer = parseInt(answer)

    return console.log(answer);
}

solution(118372)

// 118372	873211