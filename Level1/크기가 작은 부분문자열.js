function solution(t, p) {
  let str;
  let answer = 0;
  let Tlen = t.length;
  let Plen = p.length;

  for (let i = 0; i < Tlen - Plen + 1; i++) {
    str = t.slice(i, i + Plen);
    if (str <= p) answer++;
  }
  return answer;
}

// 예시
const result = solution("3141592", "271");
console.log(result); // 출력 결과: 2
