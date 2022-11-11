// https://school.programmers.co.kr/learn/courses/30/lessons/12915

// 내가 못품 ㅜ 답지봄

function solution(strings, n) {
    let answer = [];

    answer = strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1
        } else if (a[n] < b[n]) {
            return -1
        } else {
            return a > b ? 1 : -1
        }
    })


    return console.log(answer);
}

solution(["abac", "abce", "abcd", "cdx"], 2)

// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

// strings.map(e => {
//     arr1.push(e[n])
// })
// arr1.sort()
// arr1 = [...new Set(arr1)]
// arr1.map(r => {
//     strings.map( e=> {
//         if (r == e[n]){
//             answer.push(e)
//         }
//     })
// })