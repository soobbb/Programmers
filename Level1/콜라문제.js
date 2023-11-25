function solution(emptyBottles) {
  let totalColas = 0;

  while (emptyBottles >= 2) {
    let exchangedColas = Math.floor(emptyBottles / 2);
    totalColas += exchangedColas;
    emptyBottles = exchangedColas + (emptyBottles % 2);
  }

  return totalColas;
}

const result = solution(20);
console.log(result); // 출력 결과는 19가 나와야 합니다.
