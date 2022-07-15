// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    let answer = [];
    let str = n.toString().split("").reverse()
    str.map((e) =>{
        e = Number(e)
        answer.push(e)
    })

    return console.log(answer);
}

solution(12345)

12345	[5,4,3,2,1]