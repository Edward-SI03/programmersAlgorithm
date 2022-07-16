// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    let answer = [];
    let L = lottos
    let W = win_nums
    let rank = [1,2,3,4,5,6,6]
    let C = 6
    let hc = 6
    let lc = 6

    // 로또에 0 이있는지 확인 없으면 바로 대조 가능
    if (!L.includes(0)) {
        L.map(r => {
            if (W.includes(r)) {
                C--
            }
        })
        answer = [rank[C], rank[C]]
    } else {
        // 0이 있으니까 다르게비교
        L.sort((a, b) => {
            return b - a
        })
        L.map(w => {
            if (w != 0) {
                if (W.includes(w)) {
                    hc--
                    lc--
                }
            } else {
                hc--
            }
        })
        answer = [rank[hc], rank[lc]]
        console.log(hc, lc)
    }


    return console.log(answer);
}

solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])

// lottos	win_nums	result
// [44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]	[3, 5]
// [0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35]	[1, 1]