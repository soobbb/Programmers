function solution(numbers) {
  var res = numbers.reduce((a, b) => a + b, 0);
  return res / numbers.length;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
