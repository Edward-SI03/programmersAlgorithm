// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    let answer = 0;
    let str = n.toString()
    str = str.split("")
    str.map((e) => {
        e = Number(e)
        answer = answer + e
    })

    return console.log(answer);
}

solution(123)

// N	answer
// 123	6
// 987	24
["1","2",]