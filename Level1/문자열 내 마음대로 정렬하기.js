function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b); // 같은 문자일 경우 사전순으로 정렬
    } else {
      return a[n].localeCompare(b[n]); // 인덱스 n의 문자를 기준으로 정렬
    }
  });
  return strings;
}

// 예시
const strings = ["sun", "bed", "car"];
const n = 1;
console.log(solution(strings, n)); // 결과: ["car", "bed", "sun"]
