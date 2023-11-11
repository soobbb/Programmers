function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }

  return answer;
}

// 예시
const matrix1 = [
  [1, 2],
  [2, 3],
];
const matrix2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(matrix1, matrix2)); // [[4, 6], [7, 9]]
