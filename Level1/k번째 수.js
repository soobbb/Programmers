function solution(array, commands) {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];
    const slicedArray = array.slice(start - 1, end); // i번째 숫자부터 j번째 숫자까지 자름
    const sortedArray = slicedArray.sort((a, b) => a - b); // 자른 배열을 정렬
    const kthNumber = sortedArray[k - 1]; // k번째 숫자를 구함
    result.push(kthNumber); // 결과 배열에 추가
  }

  return result;
}

// 예시 입력
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

// 함수 호출 및 출력
console.log(solution(array, commands)); // 출력 예시: [5, 6, 3]
