function solution(n){
	let result=0
	let arr = n.toString().split("").reverse()

	arr.map(e => {
		result += parseInt(e)
	})

	return result;
}
console.log(solution(718253))

// 718253
// "3+5+2+8+1+7=26"