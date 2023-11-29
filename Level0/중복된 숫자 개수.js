function solution(array, n) {
  var res = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      res++;
    }
  }
  return res;
}

function solution(array, n) {
  var answer = 0;
  let Array = array.filter((item) => item === n);
  console.log(Array);
  answer = Array.length;

  return answer;
}

console.log(solution([1, 1, 1, 2, 3, 4], 1));
