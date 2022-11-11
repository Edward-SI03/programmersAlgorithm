// https://school.programmers.co.kr/learn/courses/30/lessons/67256
// 답지봄.. ㅜ

function solution(numbers, hand) {
    let answer = '';
    let L = 10
    let R = 12
    let Ld = 0
    let Rd = 0
    let center = [2, 5, 8, 11]

    numbers.map(e => {
        if (e == 0){
            e = 11
        }
        if (e == 1 || e == 4 || e == 7) {
            L = e
            answer += "L"
        } else if (e == 3 || e == 6 || e == 9) {
            R = e
            answer += "R"
        } else {
            Ld = center.indexOf(L) != -1 ? Math.abs(e - L) / 3 : Math.abs(e - 1 - L) / 3 + 1
            Rd = center.indexOf(R) != -1 ? Math.abs(e - R) / 3 : Math.abs(e + 1 - R) / 3 + 1

            if (Ld == Rd) {
                if (hand == "left") {
                    L = e
                    answer += "L"
                } else {
                    R = e
                    answer += "R"
                }
            } else if (Ld < Rd) {
                L = e
                answer += "L"
            } else {
                R = e
                answer += "R"
            }

        }
    })


    return console.log(answer);
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")

// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"

// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용

// 내가 풀다가 포기..
// 개같이도 풀었네.. 키패드를 배열이든뭐든 만들어서 이동 거리를 계산했어야했는데 그냥 if로만 돌렸네..

// let L = 10
// let R = 12
//
// numbers.map(e => {
//     if (e == 1 || e == 4 || e == 7) {
//         L = e
//         answer += "L"
//         console.log(e)
//     } else if (e == 3 || e == 6 || e == 9) {
//         R = e
//         answer += "R"
//         console.log(e)
//     } else if (e == 2 || e == 5 || e == 8 || e == 0) {
//         if (R == 2 || R == 5 || R == 8 || R == 0) {
//             if (Math.abs(e - L) < Math.abs(e - (R - 2))) {
//                 L = e
//                 answer += "L"
//                 console.log(e)
//             } else if (Math.abs(e - L) > Math.abs(e - (R - 2))) {
//                 R = e
//                 answer += "R"
//                 console.log(e)
//             } else {
//                 if (hand == "right") {
//                     R = e
//                     answer += "R"
//                     console.log(e)
//                 } else {
//                     L = e
//                     answer += "L"
//                     console.log(e)
//                 }
//             }
//         } else if (L == 2 || L == 5 || L == 8 || L == 0) {
//             if (Math.abs(e - (L + 2)) < Math.abs(e - R)) {
//                 L = e
//                 answer += "L"
//                 console.log(e)
//             } else if (Math.abs(e - (L + 2)) > Math.abs(e - R)) {
//                 R = e
//                 answer += "R"
//                 console.log(e)
//             } else {
//                 if (hand == "right") {
//                     R = e
//                     answer += "R"
//                     console.log(e)
//                 } else {
//                     L = e
//                     answer += "L"
//                     console.log(e)
//                 }
//             }
//         } else {
//             if (Math.abs(e - L) < Math.abs(e - (R - 2))) {
//                 L = e
//                 answer += "L"
//                 console.log(e)
//             } else if (Math.abs(e - L) > Math.abs(e - (R - 2))) {
//                 R = e
//                 answer += "R"
//                 console.log(e)
//             } else {
//                 if (hand == "right") {
//                     R = e
//                     answer += "R"
//                     console.log(e)
//                 } else {
//                     L = e
//                     answer += "L"
//                     console.log(e)
//                 }
//             }
//         }
//     }
// })