// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  console.log("3".toUpperCase());
  let answer = [];
  //   let regex = /^[a-z|A-Z|]+$/;
  let arr = s.toLowerCase().split(" ");
  for (let i in arr) {
    let str = arr[i];
    if (arr[i] !== "") {
      //   if (regex.test(str[0])) {
      str = str.replace(str[0], str[0].toUpperCase());
      //   }
    }
    answer.push(str);
  }
  console.log(answer.join(" "));
  return answer;
}

solution("2for  the laSt week");

/*
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	"For The Last Week"
 */
