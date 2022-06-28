// 글자를 다 끊어서 배열로 만들고 그 배열에서 P,p 만 따로 뽑아서 새로운 배열에 추가하고, Y,y도 뽑아서 배열로 만들어서 새로만든 배열 두개의 길이를 비교하면 되지 않을까?

function solution(s) {
  let arr = s.split("");
  console.log(arr);
  let emptyArrP = [];
  let emptyArrY = [];
  // 문자열 마다 끊어서 배열 만들기 성공, 빈배열에 넣어줘야지

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "p") {
      let pick = arr[i];
      emptyArrP.push(pick);
    } else if (arr[i] === "P") {
      let pick = arr[i];
      emptyArrP.push(pick);
    } else if (arr[i] === "y") {
      let pick = arr[i];
      emptyArrY.push(pick);
    } else if (arr[i] === "Y") {
      let pick = arr[i];
      emptyArrY.push(pick);
    }
  }
  // 리스트 길이 만큼 돌면서 해당문자 있으면 빈리스트에 넣어줌(중복코드 줄일수 있을것 같은데 어캐하지..)

  console.log(emptyArrP.length);
  console.log(emptyArrY.length);

  var answer = "";
  if (emptyArrP.length == emptyArrY.length) {
    answer = true;
  } else {
    answer = false;
  }
  // 새로만든 리스트 길이 비교해서 답 확인

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  return answer;
}

solution("aapPaapoopoyaaYaa");
