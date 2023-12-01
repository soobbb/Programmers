function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // 배열의 마지막 요소는 이미 정렬되었으므로 반복 횟수를 줄입니다.
    for (let j = 0; j < len - i - 1; j++) {
      // 현재 요소와 다음 요소를 비교하여 정렬합니다.
      if (arr[j] > arr[j + 1]) {
        // 두 요소의 위치를 교환합니다.
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// 예시 배열
const numbers = [64, 34, 25, 12, 22, 11, 90];

console.log(bubbleSort(numbers)); // 출력: [11, 12, 22, 25, 34, 64, 90]
