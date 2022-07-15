// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    let answer = ['SUN','MON','TUE','WED','THU','FRI','SAT']

    let day = answer[new Date("2016-" + a + "-" + b).getDay()]
    return console.log(day);
}

solution(5, 24)

// 5	24	"TUE"