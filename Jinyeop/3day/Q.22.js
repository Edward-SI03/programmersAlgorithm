// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    let answer = 0;
    let str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


    for (let i = 0; i < str.length; i++) {
        // 찾는게 없으면 -1 출력 그럼 다 바꾼거니까 while 종료 후 i++
        while (s.indexOf(str[i]) != -1){
            s = s.replace(str[i], num[i])
        }
    }
    answer = parseInt(s)

    return console.log(answer);
}

solution("fourone3seven4oneseveneightfour")

// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123

// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine