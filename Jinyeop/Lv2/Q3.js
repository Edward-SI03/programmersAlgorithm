// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기

function solution(n, words) {
  let arr = [words[0]],
    P = 2,
    turn = 1;

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (P > n) {
      P = 1;
      turn++;
    }

    if (arr.includes(word)) return [P, turn];

    let wordB = words[i - 1];
    if (wordB[wordB.length - 1] !== word[0]) return [P, turn];

    arr.push(word);
    P++;
  }

  return [0, 0];
}

solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);

/*
3,	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
5,	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
2,	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]
*/
