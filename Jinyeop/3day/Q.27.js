// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let answer = 0;
    let arr = []

    d.sort((a,b)=>a-b)

    for (let i = 0; i < d.length; i++){
        if( answer >= budget){
            break
        }else {
            arr.push(d[i])
            answer += d[i]
        }
    }
    if (answer > budget){
        arr.pop()
        answer = arr.length
    }
    answer = arr.length


    return console.log(answer);
}

solution([1,1], 1)

// d	budget	result
// [1,3,2,5,4]	9	3
// [2,2,3,3]	10	4