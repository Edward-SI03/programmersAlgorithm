// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    let answer = [];
    let p = stages.length
    let table = Array(N).fill().map((v, i) => i + 1);
    let c = 0
    let a = []

    table.map(e => {
        for (let i = 0; i < stages.length; i++) {
            if (e == stages[i]) {
                c++
            }
        }
        a.push({"n":e, "m":c/p})
        p -=c
        c=0
    })
    a = a.sort((a,b) => {return b.m - a.m})

    a.map(e =>{
        answer.push(e["n"])
    })

    return console.log(answer);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])

// N	stages	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	[4,1,2,3]
// 전체 스테이지의 개수 N,
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.