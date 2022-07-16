// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++){
        // arr의 i번째 요소와 그 다음 i+1 요소 값이 다르면 i요소를 answer에 넣어줌
        if (arr[i] !== arr[i+1]){
            answer.push(arr[i])
        }
    }

    return console.log(answer);
}

solution([4,4,4,3,3])

// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]