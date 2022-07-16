// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let answer = 0;
    // left 부터 rigiht 사이 수
    let arr1 = []
    // 약수
    let arr2 = []
    // 약수 갯수
    let arr3 = []

    for (let i = left; i <= right; i++){
        arr1.push(i)
    }
    arr1.map(e => {
        // 약수는 제곱근보다 같거나 작을테니까
        for (let i = 1; i <= Math.sqrt(e); i++){
            // 약수는 나눠서 나머지가 0이면 나눈수랑 몫을 저장
            if (e % i == 0){
                arr2.push(i)
                arr2.push(e/i)
            }
        }
        // 약수 중복 제거
        arr2 = [...new Set(arr2)]
        arr3.push(arr2.length)
        arr2 = []
    })
    // 약수 객수가 짝수면 더하고 아니면 사이숫자를 빼라
    for (let i = 0; i < arr3.length;i++){
        arr3[i]%2 == 0? answer += arr1[i] : answer -= arr1[i]
    }

    return console.log(answer);
}

solution(24,	27)

// left	right	result
// 13,	17	43
// 24,	27	52

// 남이 푼거
// 제곱근이 정수면 약수의 갯수는 무조건 홀수 니까 바로 빼버림
// for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//         answer -= i;
//     } else {
//         answer += i;
//     }
// }