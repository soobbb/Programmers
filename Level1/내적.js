function solution(a, b) {
  let result = 0;
  // 두 배열의 각 원소를 순회하며 곱하고 결과에 더함
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}
