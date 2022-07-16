// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    let answer = [];
    let a = [1, 2, 3, 4, 5]
    let b = [2, 1, 2, 3, 2, 4, 2, 5]
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let ao = 0
    let bo = 0
    let co = 0
    let i = 0;

    do {
        if (answers[i] == a[i % a.length]) {
            ao++
        }
        if (answers[i] == b[i % b.length]) {
            bo++
        }
        if (answers[i] == c[i % c.length]) {
            co++
        }

        i = i + 1;
    } while (i < answers.length);
    let rank = [ao, bo, co]
    fr = Math.max.apply(null, rank)

    if (ao == fr) {
        answer.push(1)
    }
    if (bo == fr) {
        answer.push(2)
    }
    if (co == fr) {
        answer.push(3)
    }

    // 1등 찾기
    // for (let i = 0; i < 3; i++) {
    //     if (rank[i] == fr)
    //         answer.push(i + 1);
    // }


    return console.log(answer);
}

solution([1, 3, 2, 4, 2])

// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]