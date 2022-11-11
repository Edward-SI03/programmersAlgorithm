// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    console.log(dartResult)
    let answer = 0;
    let arr = []
    let d = []
    let p = [[],[],[]]

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
            arr.push("10")
        } else if (dartResult[i] == 0 && dartResult[i - 1] == 1) {
            continue
        } else {
            arr.push(dartResult[i])
        }
    }
    console.log(arr)

    for (let a = 1; a < 4; a++) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (!isNaN(arr[i])) {
                d.push(arr.splice(arr.lastIndexOf(arr[i])))
            }
        }
    }
    d=d.reverse()
    console.log(d)

    for (let i = 0; i < d.length; i++) {
        for (let o= 0; o<d[i].length;o++){
            if (!isNaN(d[i][o])){
                p[i] = p[i]+parseInt(d[i][o])
            }

            if (d[i][o] =="S"){
                p[i] = p[i]*1
            }else if (d[i][o] =="D"){
                p[i] = Math.pow(p[i],2)
            }else if (d[i][o] =="T"){
                p[i] = Math.pow(p[i],3)
            }

            if (d[i][o] =="#"){
                p[i] = p[i]*-1
            }else if (d[i][o] =="*"){
                if (i==0){
                    p[i] = p[i]*2
                }else {
                    p[i] = p[i]*2
                    p[i-1] = p[i-1]*2
                }
            }
        }
    }
    console.log(p)

    p.map(e => {
        answer +=e
    })

    return console.log(answer);
}

solution("1S2D*3T")

// 예제	dartResult	answer	설명
// 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	9	12 + 21 * (-1) + 101
// 3	1D2S0T	3	12 + 21 + 03
// 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
// 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2