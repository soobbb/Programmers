function solution(arr) {
  const res = arr.reduce((accum, currentArr) => accum + currentArr);
  const answer = res / arr.length;
  return answer;
}
