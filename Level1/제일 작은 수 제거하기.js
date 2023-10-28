function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }

  const minVal = Math.min(...arr);
  const newArr = arr.filter((element) => element !== minVal); // 가장 작은 값을 제외한 새 배열을 생성합니다.

  return newArr;
}
