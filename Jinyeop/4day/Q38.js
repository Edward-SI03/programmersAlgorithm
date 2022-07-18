// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    let answer = '';
    let arr = []

    s = s.split(" ")
    console.log(typeof s[1])

    s.map(e => {
        arr.push(parseInt(e))
    })
    console.log(arr)



    return console.log(answer);
}

solution("-1, 1 2 3 4")

// s	return
// "1 2 3 4"	"1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	"-1 -1"