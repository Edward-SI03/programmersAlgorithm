// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// 답지봄 배열로 만들어서 -1 +1 해주는거까지하고
// 무지성 앞으로전달 뒤로전달하니까 안댐 그냥 하나씩 돌면서 2개이면서 옆에 없으면 주고 해야댐

function solution(n, lost, reserve) {
    let answer = 0;
    let total = []

    for (let i = 1; i <= n; i++) {
        total.push(1)
    }


    for (let i = 0; i < lost.length; i++) {
        total[lost[i] - 1] = total[lost[i] - 1] - 1
    }

    for (let i = 0; i < reserve.length; i++) {
        total[reserve[i] - 1] = total[reserve[i] - 1] + 1
    }

    for (let i = 0; i < total.length; i++) {
        if (total[i] == 0) {
            if (total[i - 1] == 2) {
                total[i] = total[i] + 1
                total[i - 1] = total[i - 1] - 1
            } else if (total[i + 1] == 2) {
                total[i] = total[i] + 1
                total[i + 1] = total[i + 1] - 1
            }
        }
    }


    for (let i = 0; i < total.length; i++) {
        if (total[i] == 1 || total[i] == 2) {
            answer++
        }
    }


    console.log(total)


    return console.log(answer);
}

solution(6, [1,3,5], [2, 4,6])

// n	lost	reserve	return
// 5	[2, 4]	[1, 3, 5]	5
// 5	[2, 4]	[3]	4
// 3	[3]	[1]	2

//     // for (let i= 0; i<total.length;i++){
//     //     if (total[i] == 0){
//     //         if (total[i-1] ==2){
//     //             total[i] = total[i]+1
//     //             total[i-1] = total[i-1]-1
//     //         }else if(total[i+1] ==2){
//     //             total[i] = total[i]+1
//     //             total[i+1] = total[i+1]-1
//     //         }
//     //     }
//     // }
//
//
//     // for (let i = 0; i < total.length - 1; i++) {
//     //     if (total[i].dress == 2 && total[i + 1].dress == 0) {
//     //         total[i].dress = total[i].dress - 1
//     //         total[i + 1].dress = total[i + 1].dress + 1
//     //     }
//     // }
//     //
//     // for (let i = 1; i < total.length; i++) {
//     //     if (total[i].dress == 2 && total[i - 1].dress == 0) {
//     //         total[i].dress = total[i].dress - 1
//     //         total[i - 1].dress = total[i - 1].dress + 1
//     //     }
//     // }

