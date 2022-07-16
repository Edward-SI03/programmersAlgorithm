// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    let answer = [];
    let q = numbers
    let result = []

    for (let i = 0; i < q.length; i++) {
        for (let c = 0; c < q.length; c++) {
            if (i !== c) {
                answer.push(q[i] + q[c])
            }
        }

        // 같은 위치 요소 피하기기
       // for (let c = i + 1; c < q.length; c++) {
        //     answer.push(q[i] + q[c])
        // }

        // 배열이 특정 요소를 포함하고 있는지 판별
        // if (!answer.includes(q[i] + q[c])) {
        //     answer.push(q[i] + q[c]);
        // }
    }

    answer = answer.sort((a, b) => {
        return a - b
    })

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] != answer[i + 1]) {
            result.push(answer[i])
        }
    }

    // 배열 중복 제거 Set()       A = [...new Set(arr)]
    // result = [...new Set(answer)]

    return console.log(result);
}

solution([5, 0, 2, 7])

// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]