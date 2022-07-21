// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    let answer = 0;
    let c = nums.length/2

    let n = [...new Set(nums)]

    answer = Math.min(c, n.length)



    return console.log(answer);
}

solution([3,1,2,3])

// nums	result
// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2

// 주어진 폰켓몬중 N/2마리를 고를 때 선택할 수 있는 폰켓몬 종류의 최댓값을 구하는 문제입니다