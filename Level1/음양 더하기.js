function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; absolutes.length; i++) {
    if (signs[i] === true) {
      sum += absolutes[i];
    } else if (signs[i] === false) {
      sum -= absolutes[i];
    }
  }
  return sum;
}

// 맛있는 코드
// function solution1(absolutes, signs) {
//   return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
// }
