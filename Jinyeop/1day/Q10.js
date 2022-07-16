// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    let answer = arr;
    // 배열의 값이 1개면 -1 출력
    if (arr.length == 1){
       answer = [-1]
    }else{
        // Math.min.apply() 로 가장 작은수 찾아냄
        let dis = Math.min.apply(null,arr)
        // 특정 값만 뺄수 없어서 최솟값만 뺴고 재배열
        answer = arr.filter((e) => e !== dis)
    }
    return console.log(answer);
}

solution([4,3,1,2])
