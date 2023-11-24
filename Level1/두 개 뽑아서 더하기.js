function solution(numbers) {
  const sumSet = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      sumSet.add(sum);
    }
  }

  return Array.from(sumSet).sort((a, b) => a - b);
}

// 예시 입력
const numbers = [2, 1, 3, 4, 1];

// 함수 호출 및 출력
console.log(solution(numbers)); // 출력 예시: [2, 3, 4, 5, 6, 7]
