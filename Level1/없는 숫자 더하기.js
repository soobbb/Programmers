function solution(numbers) {
  let res = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      res += i;
    }
  }
  return res;
}

const numbers = [1, 3, 4, 6, 8];
const result = solution(numbers);
console.log(result);

// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }