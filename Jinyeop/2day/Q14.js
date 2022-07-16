// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    let answer = 0;
    let size = sizes
    let h = []
    let w = []

    size.map(e => {
        if (e[0] <= e[1]) {
            e.reverse()
        }
    })
    size.map(e => {
        h.push(e.pop())
        w.push(e.pop())
    })
    answer = Math.max.apply(null, w) * Math.max.apply(null, h)


    return console.log(answer);
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]])

// 명함번호	가로 길이	세로 길이
// [[60, 50], [30, 70], [60, 30], [80, 40]]	4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133