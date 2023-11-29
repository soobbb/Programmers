function solution(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) res += i;
  }
  return res;
}

console.log(solution(10));

function solution(n) {
  var answer = 0;

  for (let i = 2; i <= n; i += 2) answer += i;

  return answer;
}
