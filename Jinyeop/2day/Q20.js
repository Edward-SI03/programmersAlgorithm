// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    let answer = '';
    // split으로 배열만들고, sort로 정렬
    // 정렬 하면 대문자 소문자 a-z 로 정렬되니까 reverse로 뒤집음
    let q = s.split("").sort().reverse()
    // join으로 배열을 한문자열로 만듬
    answer = q.join("")

    return console.log(answer);
}

solution("Zbcdefg")

// s	return
// "Zbcdefg"	"gfedcbZ"