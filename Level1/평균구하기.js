function solution(arr) {
  const res = arr.reduce((accum, currentArr) => accum + currentArr);
  const answer = res / arr.length;
  return answer;
}

function solution(arr) {
  var total = arr.reduce((acc, cur) => acc + cur);
  console.log(total);
  var res = total / arr.length;
  return res;
}

console.log(solution([1,2,3,4]))
