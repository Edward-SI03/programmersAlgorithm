// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let answer = [];
    let arr = []

    for (let i= 0; i <commands.length; i++){
        arr = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => {return a-b})
        answer.push(arr[commands[i][2]-1])
    }

    return console.log(answer);
}

solution([1, 5, 2, 6, 3, 7, 4], [[1,1,1],[2, 5, 3], [4, 4, 1], [1, 7, 3]])

// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]