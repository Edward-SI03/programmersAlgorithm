// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    let answer = 0;
    let D = []

    // e, i의 위치를 잘 보아야 함(0,0 / 1,0 / 2,0 처럼 앞 인덱스가 먼저 올라감)
    moves.map(e => {
        for (let i = 0; i < board[e - 1].length; i++) {
            if (board[i][e - 1] != 0) {
                D.push(board[i][e - 1])
                board[i][e - 1] = 0
                break
            }
        }
    })
    console.log(board)
    console.log(D)


    for (let i = 0; i < D.length; i++) {
        if (D[i] == D[i + 1]) {
            answer = answer + 2
            D.splice(i, 2);
            i = 0; // i-- 은 테스트 실패
            console.log(D)
        }
    }


    return console.log(answer);
}

solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])

// board	moves	result
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4