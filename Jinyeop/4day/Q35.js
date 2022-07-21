// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    let answer = [];
    let arr3 = []

    // 1번 지도 arr1 2진법 변환
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].toString(2)
        // 00010 은 10으로 표현되니까 길이가 n만큼 안대면 앞에 0추가
        while (arr1[i].length < n) {
            arr1[i] = "0" + arr1[i]
        }
    }

    // 2번 지도 arr2 2진법 변환
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = arr2[i].toString(2)
        // 00010 은 10으로 표현되니까 길이가 n만큼 안대면 앞에 0추가
        while (arr2[i].length < n) {
            arr2[i] = "0" + arr2[i]
        }
    }

    // arr1과 2 비교 같은인덱스에서 하나라도 1(벽)이면 # 넣어주고 아니면(둘다0이면) " " 넣어줌
    for (let i = 0; i < arr1.length; i++) {
        for (let o = 0; o < arr1[i].length; o++) {
            if (arr1[i][o] == 1 || arr2[i][o] == 1) {
                arr3.push("#")
            } else {
                arr3.push(" ")
            }
        }
        // 1줄씩 만들어지면 answer에 넣고 arr3 초기화
        answer.push(arr3.join(""))
        arr3=[]

    }

    // 출력값에 공백이 2개거나 맨앞에 공백이면 지워주는줄 알고 만들었는데 아니었음 사용x
    // arr4.map(e=>{
    //     e = e.replace(/\ {2,}/g, " ")
    //     answer.push(e)
    // })

    return console.log(answer);
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])

// 매개변수	값
// n	5
// arr1	[9, 20, 28, 18, 11]
// arr2	[30, 1, 21, 17, 28]
// 출력	["#####","# # #", "### #", "# ##", "#####"]

// n	6
// arr1	[46, 33, 33 ,22, 31, 50]
// arr2	[27 ,56, 19, 14, 14, 10]
// 출력	["######", "### #", "## ##", " #### ", " #####", "### # "]