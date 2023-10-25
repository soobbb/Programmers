function solution(arr, divisor) {
  let res = [];
  let arrSort = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arrSort[i] % divisor === 0) {
      res.push(arrSort[i]);
    }
  }
  if (res.length === 0) res = [-1];
  return res;
}
