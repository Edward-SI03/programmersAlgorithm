// https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 10진법을 3진법으로
// 45/3 15...0   45 = 1200(3)
// 12/3 5...0   15*3+0
// 5/3 1...2   5*3+0
// 1/3 0...1   1*3+2
// 45 = 1200(3)

function solution(n) {
    return parseInt(n.toString(3).split("").reverse().join(""), 3)
}

solution(45)

// 3진법으로 바꾸는걸 해보았는데 하다 실패 근데
// 이렇게 머리를 써서 바꾸는 연습이 좋은건가 구글링해서 알맞는 함수 찾는게 잘한건가?
// 그리고 코드가 저렇게 짧을수록 좋은건가 아님 보기편하게 하는게 좋은걸까?

// let answer = 0;
//     let arr = []
//     let q
//
//     while (n > 0) {
//         q = n % 3
//         arr.push(q)
//         n=parseInt(n/3)
//         // console.log(typeof (arr[1]))
//     }
//     arr = arr.reverse()
//         console.log(typeof (arr[1]))
//     for (let i = 0; i <arr.length; i++){
//         q = arr[i]*3 + arr[i+1]
//         console.log(q)
//     }

// n	result
// 45	7
// 125	229
//
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	1200	0021	7
// 125	11122	22111	229