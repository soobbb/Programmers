function solution(n, k) {
  return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
}

console.log(solution(10, 3));
console.log(solution(64, 6));

