// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = '';
    let al = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let Al = al.join("").toUpperCase().split("")
    console.log(Al)
    let arr = []

    s = s.split("")
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " ") {
            let z = Al.indexOf(s[i]) + n
            let x = al.indexOf(s[i]) + n
            if (z >= 26 || x >= 26) {
                z = z - 26
                x = x - 26
            }

            if (s[i] === s[i].toUpperCase()) {
                arr.push(Al[z])
            } else {
                arr.push(al[x])
            }
        } else {
            arr.push(" ")
        }
    }
    answer = arr.join("")


    return console.log(answer);
}

solution("a B zy", 4)

// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"