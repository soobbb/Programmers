function solution(numbers, target) {
  let count = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]); // 현재 숫자를 더하는 경우
    dfs(index + 1, sum - numbers[index]); // 현재 숫자를 빼는 경우
  }

  dfs(0, 0); // 초기 인덱스와 합계 0으로 시작
  return count;
}

// 테스트 케이스
const example1 = solution([1, 1, 1, 1, 1], 3); // 예상 출력: 5
const example2 = solution([4, 1, 2, 1], 4); // 예상 출력: 2

console.log(example1);
console.log(example2);
