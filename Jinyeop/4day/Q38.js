// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    let answer = [];
    let arr = []

    s = s.split(" ")

    s.map(e => {
        arr.push(parseInt(e))
    })
    answer.push(Math.min(...arr))
    answer.push(" ")
    answer.push(Math.max(...arr))

    answer = answer.join("")


    return console.log(answer);
}

solution("1 -1 2 3 4")

// s	return
// "1 2 3 4"	"1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	"-1 -1"

// 내가 푼거를 좀더 짧게 바꿔보면

// function solution(s) {
//     let answer = [];
//
//     s = s.split(" ")
//
//     answer = Math.min(...s)+" "+Math.max(...s)
//
//
//     return console.log(answer);
// }
//
// solution("1 -1 2 3 4")
