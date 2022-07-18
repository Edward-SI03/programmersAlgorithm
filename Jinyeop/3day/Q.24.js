// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    let answer = '';

    new_id = new_id.toLowerCase()
    console.log(new_id)

    removeSpecialData()

    repeatdot()

    startenddot()

    if (new_id ==""){
        new_id = "a"
        console.log("공백이면 a"+new_id)
    }
    console.log(new_id)

    if (new_id.length >= 16){
        new_id = new_id.slice(0,15)
        console.log("15자로 줄임"+new_id)
        if (new_id[14] == "."){
            new_id = new_id.slice(0,-1)
            console.log("15자리 .제거"+new_id)
        }
    }
    // console.log(new_id + new_id[new_id.length-1])

    // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    if (new_id.length <= 2){
        new_id = new_id + new_id[new_id.length-1]
        if (new_id.length <= 2){
            new_id = new_id + new_id[new_id.length-1]
        }
    }
    console.log("ㅁㅁ"+new_id)
    answer = new_id




    function removeSpecialData() {
        //특수문자 검증 start
        let str = new_id;
        let regExp = /[\{\}\[\]\/?,;:|\) *~`!^\+<>@\#$%&\\\=\(\'\"]/gi
        if (regExp.test(str)) {
            //특수문자 제거
            let t = str.replace(regExp, "")
            console.log("특수문자를 제거했습니다. ==>" + t)
            new_id = t
            console.log(new_id)
        } else {
            console.log("정상적인 문자입니다. ==>" + str)
        }
        //특수문자 검증 end
    }

    function repeatdot() {
        let str = new_id
        let regExp = /\.{2,}/g
        if (regExp.test(str)) {
            let t = str.replace(regExp, ".")
            console.log("연속된 .를 제거했습니다. ==>" + t)
            new_id = t
            console.log(new_id)
        } else {
            console.log("정상적인 문자입니다. ==>" + str)
        }
    }

    function startenddot() {
        let str = new_id
        let regExp = /^\.|\.$/g
        if (regExp.test(str)) {
            let t = str.replace(regExp, "")
            console.log("양끝 .를 제거했습니다. ==>" + t)
            new_id = t
            console.log(new_id)
        } else {
            console.log("정상적인 문자입니다. ==>" + str)
        }
    }

    return console.log(answer);
}

solution("123_.def")

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

// no	new_id	result
// 예1	"...!@BaT#*..y.abcdefghijklm"	"bat.y.abcdefghi"
// 예2	"z-+.^."	"z--"
// 예3	"=.="	"aaa"
// 예4	"123_.def"	"123_.def"
// 예5	"abcdefghijklmn.p"	"abcdefghijklmn"

