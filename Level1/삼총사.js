function solution(numbers) {
  const n = numbers.length;
  let count = 0;

  // 세 명의 학생을 선택하는 모든 조합을 확인
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        // 세 명의 학생을 선택한 경우 합이 0이면 count 증가
        if (numbers[i] + numbers[j] + numbers[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

// 예시 사용법
const numbers = [-2, 3, 0, 2, -5];
const result = solution(numbers);
console.log(result); // 결과 출력
