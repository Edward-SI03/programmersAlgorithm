// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    let answer = []
    let arr1 = []

    for (let i = 0; i < nums.length - 2; i++) {
        for (let o = 1; o < nums.length - 1; o++) {
            if (i < o) {
                for (let p = 2; p < nums.length; p++) {
                    if (o < p) {
                        arr1.push(nums[i] + nums[o] + nums[p])
                    }
                }
            }
        }
    }

    // 더 좋은 for문 구문
    // for (let i = 0; i < size; i++) {
    //     for (let j = i + 1; j < size; j++) {
    //         for (let k = j + 1; k < size; k++) {
    //             num = nums[i] + nums[j] + nums[k];
    //             if (isPrime(num)) answer++;
    //         }
    //     }
    // }

    // 배열 내 중복 값 제거
    // arr1 = [...new Set(arr1)]

    // arr1 = arr1.filter((e, i, t) => {
    //     return t.indexOf(e) == i
    // })
    // 근데 이건 안해줘야함 1,2,6 과 1,3,5 으로 같은 수가 나와도 중복제거하면 카운트 사라짐

    console.log(arr1)
    let c = 1
    arr1.map(e => {
        // 포문을 줄이기 위해 소수는 약수가 하나니까 최대 제곱근애들까지만 돌려주면댐
        for (let i = 2; i <= Math.sqrt(e); i++) {
            if (e % i == 0) {
                c++
            }
        }
        if (c == 1) {
            console.log(e + "은 소수")
            answer.push(e)
        }


        c = 1
    })

    return console.log(answer.length);
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4