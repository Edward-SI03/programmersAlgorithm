// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 답지 봄 푼걸로 결과는 맞는데 시간이 너무 오래 걸려서 실패
// 정렬해서 같은 인덱스인데 값이 다르면 바로 알 수 있음

function solution(participant, completion) {
    let answer = []
    participant.sort()
    completion.sort()
    console.log(answer)
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i]
            break
        }
    }
    return console.log(answer);
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])

// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"


// let answer = "";
//
//   for (let i of completion) {
//     let c = participant.indexOf(i);
//     participant.splice(c, 1);
//   }
//   answer = participant[0];

// for (let i = 0; i < completion.length; i++) {
//         for (let c = 0; c < participant.length; c++) {
//             if (completion[i] == participant[c]) {
//                 participant.splice(c, 1)
//             }
//         }
//     }
//     answer = participant

// 차집합은 중복된 값도 같이 지워줌 사용불가
// answer = participant.filter(x => !completion.includes(x))