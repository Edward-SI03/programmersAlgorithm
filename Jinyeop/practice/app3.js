// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.

// 테스트는 통과 하는데 효율성에서 시간 초과로 탈락..
// 어떻게 해야 빨리 거를거는 거르고 중복 확인해서 빼지

function solution(participant, completion) {
  let answer = "";

  for (let i of completion) {
    let c = participant.indexOf(i);
    participant.splice(c, 1);
  }
  answer = participant[0];
  return answer;
}

solution();

//  원래는 차집합으로 빼고싶었는데 중복이 있으니까 싹다 비워지는 문제가 생김
//   answer = participant.filter((x) => !completion.includes(x));
