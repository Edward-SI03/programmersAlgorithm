// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    let answer = '';

    let q = parseInt(n / 2)
    n % 2 == 0?answer = "수박".repeat(q):answer = "수박".repeat(q)+"수"

    // if (n % 2 == 0){
    //     answer = "수박".repeat(q)
    // }else{
    //     answer = "수박".repeat(q) +"수"
    // }

    return console.log(answer);
}

solution(4)

// 3	"수박수"
// 4	"수박수박"