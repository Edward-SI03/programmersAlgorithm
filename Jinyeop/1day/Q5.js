// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    let answer = s.split(" ");
    result = ""
    for (let i = 0; i < answer.length; i++) {
        for (let c = 0; c < answer[i].length; c++) {
            if (c % 2 == 0) {
                result = result + answer[i][c].toUpperCase()
            } else {
                result = result + answer[i][c].toLowerCase()
            }
            // console.log(result)
        }
        if (i < answer.length - 1) {
            result = result + " "
        }
    }
    return console.log(result);
}

solution("a bc def ghij klmnop")

// function solution(s) {
//     let answer = s;
//     answer = answer.split(" ")
//     result = []
//     for (let i =0; i< answer.length; i++) {
//         for (let c = 0; c < i.length; c++) {
//             i = (i.replace(i.slice(c, c + 1),i.slice(c, c + 1).toUpperCase()))
//             i = (i.replace(i.slice(c+1, c + 2),i.slice(c+1, c + 2).toLowerCase()))
//         }
//         result.push(i)
//     }
//     result = result.join(" ")
//     return console.log(result);
// }