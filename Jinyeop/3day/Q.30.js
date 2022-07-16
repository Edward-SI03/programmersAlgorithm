// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    let answer = 0;

    for (let i = 1; i <n; i++){
        // 나머지가 1이면 스탑
        if (n%i == 1){
            answer = i
            break
        }
    }

    return console.log(answer);
}

solution(10)

// n	result
// 10	3
// 12	11