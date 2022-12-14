// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 올바른 괄호

function solution(s) {
  let answer = false;
  let count = 0;

  if (s[0] === ")") return answer;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? count++ : count--;
    if (count < 0) return false;
  }
  console.log(count);
  if (count === 0) answer = true;

  console.log(answer);
  return answer;
}

// 내가 푼 방식(배열에서 ()로 짝지어지면 자르고 인덱스 2만큼 뒤로가서 다시 확인)
// 효율성에선 탈락
function solution2(s) {
  let answer = true;
  let arr = s.split("");

  //   let i = 0;
  //   while (i < arr.length) {
  //     console.log(i, arr);
  //     if (arr[i] === "(" && arr[i + 1] === ")") {
  //       arr.splice(i, 2);
  //       i -= 1;
  //     } else {
  //       i++;
  //     }
  //   }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" && arr[i + 1] === ")") {
      arr.splice(i, 2);
      i -= 2;
    }
  }

  console.log(arr);
  if (arr.length) {
    answer = false;
  }
  return answer;
}

solution("(()))(()");

/*
"()()"	true
"(())()"	true
")()("	false
"(()("	false
 */
