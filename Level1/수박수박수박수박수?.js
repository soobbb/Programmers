function solution(n) {
  // "수박" 패턴을 만들기 위해 "수박" 문자열을 n/2번 반복하고,
  // 만약 n이 홀수인 경우에는 마지막에 "수"를 추가합니다.
  return "수박".repeat(Math.floor(n / 2)) + (n % 2 === 1 ? "수" : "");
}

console.log(solution(4)); // "수박수박"
console.log(solution(3)); // "수박수"
