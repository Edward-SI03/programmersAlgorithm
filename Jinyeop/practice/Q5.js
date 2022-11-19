// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  let eatFood = [];

  for (let i = 1; i < food.length; i++) {
    let halfFood = parseInt(food[i] / 2);

    let n = 0;
    while (n < halfFood) {
      eatFood.push(i);
      n++;
    }
  }

  let answer = eatFood.join("") + "0" + eatFood.reverse().join("");
  return answer;
}

solution([1, 3, 4, 6]);

/*
[1, 3, 4, 6]	"1223330333221"
[1, 7, 1, 2]	"111303111"
*/
